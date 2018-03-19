import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  pendientesRoot = 'PendientesPage'
  terminadosRoot = 'TerminadosPage'


  constructor(public navCtrl: NavController) {}

}
