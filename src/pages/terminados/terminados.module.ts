import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TerminadosPage } from './terminados';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    TerminadosPage,
  ],
  imports: [
    IonicPageModule.forChild(TerminadosPage),PipesModule
  ],
})
export class TerminadosPageModule {}
