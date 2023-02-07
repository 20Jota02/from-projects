import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import {Project } from '../models/project'
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  _url = 'http://localhost:3000/projects'

  constructor(
    private http : HttpClient
  ) {

    // console.log('project')
  }




    // enlista todo

  getProjects(){
    let header = new HttpHeaders().set('Type-content', 'aplication/json')

    return this.http.get(this._url, {
       headers:header
    });

  }


// listar solo uno

  getProject(id:string){

    return this.http.get(`${this._url}/projects/${id}`);
  }


// crear

  saveProjects( project : Project ){

return this.http.post(`${this._url}/projects/`,project);

  }


  // eliminar
  deleteProjects(id:string  ){
    return this.http.delete(`${this._url}/projects/${id}`);

  }



// update



  updateProjects (id:string,updateProjects: Project) {
    return this.http.put(`${this._url}/projects/${id}`, updateProjects);

  }


}



