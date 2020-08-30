import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PractiveRouteModule} from './marvel-route.module';
import {SharedModule} from '../shared/shared/shared.module';
import { MarvelComponent } from './marvel/marvel.component';
import { CharaterDescriptionModalComponent } from './marvel/charater-description-modal/charater-description-modal.component';
import { FavoriteListModalComponent } from './marvel/favorite-list-modal/favorite-list-modal.component';
import { ModalDirectiveDirective } from './marvel/modal-directive.directive';

@NgModule({
  declarations: [MarvelComponent, CharaterDescriptionModalComponent, FavoriteListModalComponent, ModalDirectiveDirective],
  imports: [
    CommonModule,
    PractiveRouteModule,
    SharedModule
  ]

})
export class PractiveWorksModule { }
