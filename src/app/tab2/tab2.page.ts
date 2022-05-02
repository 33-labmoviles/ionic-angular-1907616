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
    return this.http.get('https://listas-5f864-default-rtdb.firebaseio.com/.json').subscribe(res => {
   
    this.listas = res;
    console.log(res);
    })
  
  }
}
