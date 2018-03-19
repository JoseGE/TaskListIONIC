import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import {Listas, ListaItem} from './../../app/class/index';
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';
@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  private idx : number;
  private lista : Listas;
  constructor(private _listadeseos: ListaDeseosProvider, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.idx = this.navParams.get("idx");
    this.lista = this.navParams.get("lista");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

  updateState(item:ListaItem) {
    item.completado = !item.completado;
    let completado:boolean = true;
    for (let item of this.lista.items ) {
     if(!item.completado){
      completado = false;
      break;
     }
    }
    console.log(this._listadeseos.listas);
    
    this.lista.completado = completado;
    this._listadeseos.updateStorage() 
  }
  deleteList() {
    let confirm = this.alertCtrl.create({
      title: 'Confirmación',
      message: 'Seguro que desea eliminar la lista?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this._listadeseos.deleteList(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}
