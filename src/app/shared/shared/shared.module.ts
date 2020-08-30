import { NgModule, ModuleWithProviders } from '@angular/core';
import {  HashLocationStrategy, LocationStrategy } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ServiceWorkerModule } from '@angular/service-worker';
import  {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { environment } from '../../../environments/environment';
import { MatOptionModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [   
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,   
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [    
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,    
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return  {
    ngModule: SharedModule,
    providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
     {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
    ]
  }

 }
}
