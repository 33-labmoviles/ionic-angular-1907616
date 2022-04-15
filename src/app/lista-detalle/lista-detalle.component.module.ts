import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { ListaDetalleComponent } from './lista-detalle.component';
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ListaDetalleComponent],
  exports: [ListaDetalleComponent],
})
export class ListaDetalleComponentModule {}