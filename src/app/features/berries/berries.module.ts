import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BerryCardComponent } from './berry-card/berry-card.component';
import { BerryListComponent } from './berry-list/berry-list.component';
import { BerryPageComponent } from './berry-page/berry-page.component';
import { BerryInfoComponent } from './berry-info/berry-info.component';

@NgModule({
  declarations: [
    BerryCardComponent,
    BerryListComponent,
    BerryPageComponent,
    BerryInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BerryPageComponent
  ]
})

export class BerriesModule { }
