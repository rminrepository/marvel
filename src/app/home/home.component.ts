import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  txt = 'welcome';

  constructor(
   // @Inject(PLATFORM_ID) private platformId,
     private snack:MatSnackBar){

    }
    
ngOnInit(){
  // let x= 0;
  // if (isPlatformBrowser(this.platformId)) {
  //  x = 5;
  
  // }
  // console.log('app running on server');

}

  txt2(t){
    this.txt = t.value;
    if (this.txt.length > 10) {
    t.value = '';
    this.snack.open('its cool','yes',{
      duration: 3000
    })
    }
  }
}

