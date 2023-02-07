import { ActualizarComponent } from './actualizar/actualizar.component';
import { EditarComponent } from './editar/editar.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { ProjectsComponent } from "./projects/projects.component";




// import { NotfoudComponent } from './Views/SystemMessagues/notfoud/notfoud.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full',
  },
  {
    path: 'projects',
    component:ProjectsComponent
  },
  {
    path: 'editar',
    component:EditarComponent
  },
  {
    path: 'actuaizar',
    component:ActualizarComponent
  },
  {

  },



];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

