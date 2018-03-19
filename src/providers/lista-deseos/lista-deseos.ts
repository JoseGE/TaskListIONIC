import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Listas } from '../../app/class/Listas';

@Injectable()
export class ListaDeseosProvider {
  listas = [];
  constructor(public http: HttpClient) {
    this.loadStorage();
    console.log(this.listas);
    
    console.log('Hello ListaDeseosProvider Provider');
  }

  updateStorage() : void{
    console.log(this.listas);
    
    localStorage.setItem("data",JSON.stringify(this.listas));
  }

  loadStorage() : void {
    if (localStorage.getItem("data")) this.listas = JSON.parse(localStorage.getItem("data"));
  }

  addList(list:Listas){
    
    this.updateStorage();
  }
  deleteList(idx:number){
    this.listas.splice(idx,1);
    this.updateStorage();
  }

}
