import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { marvel } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favorite-list-modal',
  templateUrl: './favorite-list-modal.component.html',
  styleUrls: ['./favorite-list-modal.component.scss']
})
export class FavoriteListModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() delChar = new EventEmitter<number>();
  favList: any;
  marv = marvel;
  constructor(private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  exit() {
    this.close.emit();
  }

  deleteChar(index) {
    this.delChar.emit(index);
    this.favList.splice(index,1);
    this.openSnackBar('Character','Deleted');

  }

  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 3000,
    });
  }

}
