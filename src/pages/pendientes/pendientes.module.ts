import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendientesPage } from './pendientes';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PendientesPage,
  ],
  imports: [
    IonicPageModule.forChild(PendientesPage),PipesModule
  ],
})
export class PendientesPageModule {}
