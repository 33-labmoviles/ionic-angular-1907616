import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  agregarlista(nuevaLista: any){
    return this.http.post('https://listas-5f864-default-rtdb.firebaseio.com/listas.json', nuevaLista);
  }

  detalleAlumno(matricula: string){
    return this.http.get('https://listas-5f864-default-rtdb.firebaseio.com/listas/'+ matricula + '.json');
  }
}
