import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BerriesRoutingModule } from './berries-routing.module';
import { BerryListComponent } from './berry-list/berry-list.component';
import { BerryCardComponent } from './berry-card/berry-card.component';
import { BerryContentComponent } from './berry-content/berry-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BerryListComponent,
    BerryCardComponent,
    BerryContentComponent
  ],
  imports: [
    CommonModule,
    BerriesRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [   
    BerryListComponent,
    BerryContentComponent
  ]
})
export class BerriesModule { }
