import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Listas,ListaItem } from "./../../app/class/index";
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos';

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {
   nameList:string = "";
   nameItem:string = "";
  items: ListaItem[]=[];
   constructor(
      private _service: ListaDeseosProvider,
      public alertCtrl: AlertController,
      public navCtrl: NavController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }
  addItem():void{
    if(this.nameItem.length == 0 ){
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nameItem;
    this.items.push(item);
    this.nameItem="";

  }

  deleteItem(item:number):void{
    if (item > -1) {
      this.items.splice(item, 1)
    }
  }

  saveList() : void{
    if(this.nameList.length == 0) {
      let alert = this.alertCtrl.create({
        title: "Información",
        message: "Debe ingresar el nombre de la lista",
        buttons:["OK"]
      });
      alert.present();
    }else{

      let list = new Listas(this.nameList);
      list.items = this.items;

      this._service.addList(list);

      this.navCtrl.pop();
    }
  }
}
