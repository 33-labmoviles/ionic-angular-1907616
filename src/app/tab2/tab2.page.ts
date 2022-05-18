import { Component, OnInit} from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(private http: HttpClient){}
  ngOnInit(): void{
    this.getlistas();
  }
  listas : any = [];

  getlistas() {
    return this.http.get('https://listas-5f864-default-rtdb.firebaseio.com/listas.json').subscribe(res => {

    const listaRes: any = res;

    console.log(listaRes, "listaRes")
    const listasArray = Object.keys(res).forEach((key:any) =>{

      (this.listas).push(listaRes[key]);

      console.log(this.listas, "listas");
    })
    });
  }
}
