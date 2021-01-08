import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./src/home/home.component"
import {AnimalListComponent} from "./src/animal-list/animal-list.component"
import {AnimalSelectionComponent} from "./src/animal-selection/animal-selection.component"
import {ResultComponent} from "./src/result/result.component"
const routes: Routes = [
   {path: '', redirectTo: 'home', pathMatch: 'full'},
   { path: 'home', component: HomeComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
