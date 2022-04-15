import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListaDetalleComponent } from '../lista-detalle/lista-detalle.component';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'lista-detalle/:id',
    component: ListaDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
