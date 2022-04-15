import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.scss'],
})
export class ListaDetalleComponent implements OnInit {

  constructor(private ruta :ActivatedRoute) {}

    ngOnInit() {
      this.obtenerDetalleLista(this.matricula);
    }

    listas = [
      {
        "nombre": "Andres",
        "apellido": "Briseno",
        "matricula": "ABC123",
        "imagen" : "https://vignette.wikia.nocookie.net/lossimpson/images/5/55/Desconocido.png/revision/latest?cb=20150614004847&path-prefix=es"
      },
      {
        "nombre": "Alejandro",
        "apellido": "Cristerna",
        "matricula": "ABC123",
        "imagen" : "https://vignette.wikia.nocookie.net/lossimpson/images/5/55/Desconocido.png/revision/latest?cb=20150614004847&path-prefix=es"
      },
      {
        "nombre": "Peter",
        "apellido": "Parker 1",
        "matricula": "ABC123",
        "imagen" : "https://vignette.wikia.nocookie.net/lossimpson/images/5/55/Desconocido.png/revision/latest?cb=20150614004847&path-prefix=es"
      },
      {
        "nombre": "Peter",
        "apellido": "Parker 2",
        "matricula": "ABC123",
        "imagen" : "https://vignette.wikia.nocookie.net/lossimpson/images/5/55/Desconocido.png/revision/latest?cb=20150614004847&path-prefix=es"
      },
      {
        "nombre": "Peter",
        "apellido": "Parker 3",
        "matricula": "ABC123",
        "imagen" : "https://vignette.wikia.nocookie.net/lossimpson/images/5/55/Desconocido.png/revision/latest?cb=20150614004847&path-prefix=es"
      },
      {
        "nombre": "Tobey",
        "apellido": "Maguire",
        "matricula": "ABC123",
        "imagen" : "https://vignette.wikia.nocookie.net/lossimpson/images/5/55/Desconocido.png/revision/latest?cb=20150614004847&path-prefix=es"
      },
      {
        "nombre": "Andrew",
        "apellido": "Garfield",
        "matricula": "ABC123", 
        "imagen" : "https://vignette.wikia.nocookie.net/lossimpson/images/5/55/Desconocido.png/revision/latest?cb=20150614004847&path-prefix=es"
      },
        {
        "nombre": "Tom",
        "apellido": "Holland",
        "matricula": "ABC123",
        "imagen" : "https://vignette.wikia.nocookie.net/lossimpson/images/5/55/Desconocido.png/revision/latest?cb=20150614004847&path-prefix=es"
      },
       {
        "nombre": "Willem",
        "apellido": "Dafoe",
        "matricula": "ABC123",
        "imagen" : "https://vignette.wikia.nocookie.net/lossimpson/images/5/55/Desconocido.png/revision/latest?cb=20150614004847&path-prefix=es"
      },
      {
        "nombre": "Alfred",
        "apellido": "Molina",
        "matricula": "ABC123",
        "imagen" : "https://vignette.wikia.nocookie.net/lossimpson/images/5/55/Desconocido.png/revision/latest?cb=20150614004847&path-prefix=es"
      },
      {
        "nombre": "Benedict",
        "apellido": "Cumberbatch",
        "matricula": "ABC123",
        "imagen" : "https://vignette.wikia.nocookie.net/lossimpson/images/5/55/Desconocido.png/revision/latest?cb=20150614004847&path-prefix=es"
      },
      {
        "nombre": "Jaime",
        "apellido": "Foxx",
        "matricula": "ABC123",
        "imagen" : "https://vignette.wikia.nocookie.net/lossimpson/images/5/55/Desconocido.png/revision/latest?cb=20150614004847&path-prefix=es"
      },
      {
        "nombre": "Charlie",
        "apellido": "Cox",
        "matricula": "ABC123",
        "imagen" : "https://vignette.wikia.nocookie.net/lossimpson/images/5/55/Desconocido.png/revision/latest?cb=20150614004847&path-prefix=es"
      }
    ];
   
    listaDetalle: any={}
    matricula: string = this.ruta.snapshot.params.id
    obtenerDetalleLista(matricula: String): any{
      console.log(matricula);

for (let i = 0; i < this.listas.length; i++) {
  if (matricula == this.listas[i].matricula) {
    this.listaDetalle = this.listas[i];
  }
  
}

      return this.listaDetalle;
    }
}