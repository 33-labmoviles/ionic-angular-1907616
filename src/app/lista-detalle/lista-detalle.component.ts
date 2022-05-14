import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.scss'],
})
export class ListaDetalleComponent implements OnInit {


  constructor(
    private ruta :ActivatedRoute,
    private db: DatabaseService,
    public actionSheetC: ActionSheetController) {}

    ngOnInit() {
      console.log(this.matricula)
      this.obtenerDetalleLista(this.matricula);
    }

    listaDetalle: any={}
    matricula: string = this.ruta.snapshot.params.matricula;
   
    obtenerDetalleLista(matricula: String): any{
      this.db.detalleLista(matricula)


      return this.listaDetalle;
    }


    async mostrarActionSheet() {
      const actionSheet = await this.actionSheetC.create({
        header: 'Opciones',
        cssClass: 'mi-primer-action-sheet',
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          id: 'delete-button',
          data: {
            type: 'delete'
          },
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Share',
          icon: 'share',
          data: 10,
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle',
          data: 'Data value',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
  
      const { role, data } = await actionSheet.onDidDismiss();
      console.log('onDidDismiss resolved with role and data', role, data);
    }
  }