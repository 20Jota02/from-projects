import { AppRoutingModule } from './app-routing.module';


import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalsComponent } from './modals/modals.component';
import { EditarComponent } from './editar/editar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ModalsComponent,
    EditarComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
