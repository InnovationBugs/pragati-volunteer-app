import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProvideNeedyDataPage } from './provide-needy-data';

@NgModule({
  declarations: [
    ProvideNeedyDataPage,
  ],
  imports: [
    IonicPageModule.forChild(ProvideNeedyDataPage),
  ],
})
export class ProvideNeedyDataPageModule {}
