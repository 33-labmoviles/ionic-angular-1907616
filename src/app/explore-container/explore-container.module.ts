import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './../tab2/tab2.page';
import { ExploreContainerComponent } from './explore-container.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [ExploreContainerComponent, Tab2Page],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
