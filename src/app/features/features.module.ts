import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BerriesModule } from './berries/berries.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BerriesModule
  ],
  exports: [
    BerriesModule
  ]
})
export class FeaturesModule { }
