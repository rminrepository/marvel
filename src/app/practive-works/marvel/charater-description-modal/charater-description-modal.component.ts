import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { marvel } from 'src/environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-charater-description-modal',
  templateUrl: './charater-description-modal.component.html',
  styleUrls: ['./charater-description-modal.component.scss']
})
export class CharaterDescriptionModalComponent implements OnInit {
  data: any ;
  favList : any;
  @Output() close = new EventEmitter<void>();
  @Output() addtofav = new EventEmitter<void>();
  marv = marvel;
  isFavorite = false;
  constructor(private snack:MatSnackBar) {  }

  ngOnInit(): void {
    if (this.favList.includes(this.data))
        this.isFavorite = true;
    console.log(this.data);   
  }

  exit() {
    this.close.emit();
  }

  favoriteChar(){  
  
    this.addtofav.emit(this.data);
    this.isFavorite = true ;  
    this.openSnackBar('Character', 'Added !');   
      
  }

  goto(url){
   window.open(url)
  }


  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 3000,
    });
  }  

}
