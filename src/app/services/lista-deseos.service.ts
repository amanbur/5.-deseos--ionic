import { Injectable } from '@angular/core';
import {Lista} from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas: Lista[] = []
  constructor() {

    let lista1 = new Lista('Compras de supermecados');
    let lista2 = new Lista('Compras de supermecados');
    let lista3 = new Lista('Compras de supermecados');

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);

    console.log("Servicio inicializado");
  }
}
