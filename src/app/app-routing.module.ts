import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { MainComponent } from './componentes/main/main.component'; // importamos las componetnes todas menos navbar
import { TiempoComponent } from './componentes/tiempo/tiempo.component';


const routes: Routes =[

  { path:'main', component: MainComponent }, 
  { path:'tiempo', component: TiempoComponent },
  {path: '', redirectTo:'/main', pathMatch: 'full' }, // si la componente no tiene nada redirige a menu
  { path: '**', component:MainComponent} // si la componenete tiene cualquier  cosa en la url redirige a main


]


@NgModule({
  imports: [
    RouterModule.forRoot (routes)
 
  ],

  exports:[RouterModule]
})
export class AppRoutingModule { }
