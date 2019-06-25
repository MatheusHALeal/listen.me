import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { PipesModule } from "../../pipes/pipes.module";

import { IonicModule } from "@ionic/angular";

import { PerfilPage } from "./perfil.page";
import { IonicRatingModule } from "ionic4-rating";

const routes: Routes = [
  {
    path: "",
    component: PerfilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    IonicRatingModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
