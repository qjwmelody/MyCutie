import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BetterPage } from './showus';

@NgModule({
  declarations: [
    BetterPage,
  ],
  imports: [
    IonicPageModule.forChild(BetterPage),
  ],
})
export class BetterPageModule {}
