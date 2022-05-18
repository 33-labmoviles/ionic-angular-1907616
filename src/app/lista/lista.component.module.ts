import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListaComponent } from './lista.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [ListaComponent],
  exports: [ListaComponent]
})
export class ListaComponentModule {}