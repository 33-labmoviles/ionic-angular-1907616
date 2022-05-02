import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lista } from '../lista';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}


  nombre: string ="";
  apellido: string ="";
  matricula: string ="";

  modelo = new Lista( this.nombre, this.apellido, this.matricula);

  onSubmit(agregarLista: NgForm) {
    //Algo aqui
    console.log("Submit")
    //AQUI VA EL REQUEST
  }
}
