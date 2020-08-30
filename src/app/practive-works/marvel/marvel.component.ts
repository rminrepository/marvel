import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { MarvelService } from '../marvel.service';
import { marvel } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ModalDirectiveDirective } from './modal-directive.directive';
import { CharaterDescriptionModalComponent } from './charater-description-modal/charater-description-modal.component';
import { FavoriteListModalComponent } from './favorite-list-modal/favorite-list-modal.component';
@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.scss']
})
export class MarvelComponent implements OnInit {
  pics = [];
  marv = marvel;
  c = 0;
  search = [];
  searchResult = false;
  favlist = [];
  paginate = [];
  controller: Subscription;
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  @ViewChild(ModalDirectiveDirective, { static: false }) alertHost: ModalDirectiveDirective;
  charaterDescriptionModalComponent = CharaterDescriptionModalComponent;
  favoriteListModalComponent = FavoriteListModalComponent;
  constructor(private marvelService: MarvelService,
    private _snackBar: MatSnackBar,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.marvelService.getCharacters().subscribe(data => {
      this.pics = data.data.results;
      console.log(data.data.results);
      for (let i = 0; i < data.data.results.length; ++i) {
        this.options.push(data.data.results[i].name);
      }
      let paging = this.pics.length / 3;
      for (let j = 0; j < paging; ++j)
        this.paginate.push(j);

    }, error => {
      this.openSnackBar(error.message, 'connection error .');
    })


  }



  nextPics() {
    if (this.pics[this.c + 3])
      this.c = this.c + 3;
  }

  prevPics() {
    if (this.pics[this.c - 1])
      this.c = this.c - 3;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if (this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0)[0] == this.myControl.value) {
      this.searchResult = true;
      this.search = this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      console.log(this.options.indexOf(this.search[0]));
    } else
      this.searchResult = false;
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0)
  }

  paginator(page) {
    this.c = (page * 3);    
  }

// transfer data and show character descriptions modal
  characterDesc(data) {
    console.log(data);
    this.charaterDescriptionModalComponent.prototype.data = data;
    this.charaterDescriptionModalComponent.prototype.favList = this.favlist;
    const modal = this.componentFactoryResolver.resolveComponentFactory(this.charaterDescriptionModalComponent);
    const ref = this.alertHost.viewContainerRef;
    ref.clear();
    const component = ref.createComponent(modal);


    this.controller = component.instance.close.subscribe(data => {
      this.controller.unsubscribe();
      ref.clear();
    });

    this.controller = component.instance.addtofav.subscribe(data => {    
     this.favlist.push(data);          
     console.log(this.favlist);
    })

  }

  favoriteCharacters() {
    this.favoriteListModalComponent.prototype.favList = this.favlist;
    const modal = this.componentFactoryResolver.resolveComponentFactory(this.favoriteListModalComponent);
    const ref = this.alertHost.viewContainerRef;
    ref.clear();
    const component = ref.createComponent(modal);


    this.controller = component.instance.close.subscribe(data => {
      this.controller.unsubscribe();
      ref.clear();

      this.controller = component.instance.delChar.subscribe(data =>{
        this.favlist.splice(data,1);
      })

    });

  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
