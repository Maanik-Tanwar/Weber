import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoveCalculatorPage } from './love-calculator';

@NgModule({
  declarations: [
    LoveCalculatorPage,
  ],
  imports: [
    IonicPageModule.forChild(LoveCalculatorPage),
  ],
})
export class LoveCalculatorPageModule {}
