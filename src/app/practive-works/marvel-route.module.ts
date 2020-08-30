import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MarvelComponent } from './marvel/marvel.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
      path: 'marvel',
      component: MarvelComponent
    }
  ]

  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})


export class PractiveRouteModule { }
