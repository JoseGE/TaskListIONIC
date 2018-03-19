import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';
import { Listas } from '../../app/class';
@IonicPage()
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {
  
  constructor(private _service:ListaDeseosProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendientesPage');
  }
  irAgregar(){
    this.navCtrl.push("AgregarPage");
  }
  details(lista, idx){
    this.navCtrl.push("DetallePage",{
      lista,idx
    });
  }

}
