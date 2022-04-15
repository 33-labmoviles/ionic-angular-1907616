import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

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
}
