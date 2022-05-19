import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { DatabaseService} from './../database.service';

import { Lista } from '../lista';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private db: DatabaseService
  ) {}

nuevaLista: Lista;

  nombre: string ="";
  apellido: string ="";
  matricula: string ="";


  onSubmit(agregarLista: NgForm) {

    console.log('Submit');

    this.nuevaLista = {
      nombre: this.nombre,
      apellido: this.apellido,
      matricula: this.matricula
    };

    this.db.agregarlista(this.nuevaLista).subscribe(res =>{
      console.log('Se agrego a la lista correctamente');
    });


    }
  }

