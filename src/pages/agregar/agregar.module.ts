import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarPage } from './agregar';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    AgregarPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarPage), PipesModule
  ],
})
export class AgregarPageModule {}
