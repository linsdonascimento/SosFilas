import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarFichaPageRoutingModule } from './listar-ficha-routing.module';

import { ListarFichaPage } from './listar-ficha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarFichaPageRoutingModule
  ],
  declarations: [ListarFichaPage]
})
export class ListarFichaPageModule {}
