import {  Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class  Tab1Page implements OnChanges {

  constructor() {}

  //changes: SimpleChanges
  ngOnChanges(): void {
}

    listas = [
    {
      "nombre": "Andres",
      "apellido": "Briseno",
      "matricula": "ABC123"
    },
    {
      "nombre": "Alejandro",
      "apellido": "Cristerna",
      "matricula": "ABC123"
    },
    {
      "nombre": "Peter",
      "apellido": "Parker 1",
      "matricula": "ABC123"
    },
    {
      "nombre": "Peter",
      "apellido": "Parker 2",
      "matricula": "ABC123"
    },
    {
      "nombre": "Peter",
      "apellido": "Parker 3",
      "matricula": "ABC123"
    },
    {
      "nombre": "Tobey",
      "apellido": "Maguire",
      "matricula": "ABC123"
    },
    {
      "nombre": "Andrew",
      "apellido": "Garfield",
      "matricula": "ABC123"
    },
      {
      "nombre": "Tom",
      "apellido": "Holland",
      "matricula": "ABC123"
    },
     {
      "nombre": "Willem",
      "apellido": "Dafoe",
      "matricula": "ABC123"
    },
    {
      "nombre": "Alfred",
      "apellido": "Molina",
      "matricula": "ABC123"
    },
    {
      "nombre": "Benedict",
      "apellido": "Cumberbatch",
      "matricula": "ABC123"
    },
    {
      "nombre": "Jaime",
      "apellido": "Foxx",
      "matricula": "ABC123"
    },
    {
      "nombre": "Charlie",
      "apellido": "Cox",
      "matricula": "ABC123"
    }
    ];

    @Input() nombre: string = "";
    @Input() apellido: string = "";
    @Input() matricula: string = "";
  
  
    
    agregarLista(): void {
      var nuevoLista: any = {
        "nombre": this.nombre,
        "apellido": this.apellido,
        "matricula": this.matricula
      }
      this.listas.push(nuevoLista);

      this.listas.sort(function(a, b) {
        var nameA = a.nombre.toUpperCase(); 
        var nameB = b.nombre.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        return 0;
      });
    
        console.log(this.listas); //Imprimir en consola el nuevo arreglo
      }
  }
  

