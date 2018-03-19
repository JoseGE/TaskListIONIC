import { ListaItem } from "./lista-item";

export class Listas {
    nombre:string;
    completado:boolean;
    items:ListaItem[];

    constructor(_nombre:string){
        this.nombre = _nombre;
        this.completado=false;
    }

}