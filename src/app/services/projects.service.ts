import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  _url = 'http://localhost:3000/projects'

  constructor(
    private http : HttpClient
  ) {

    console.log('project')
  }


  getProjects(){
    let header = new HttpHeaders().set('Type-content', 'aplication/json')

    return this.http.get(this._url, {
       headers:header
    });

  }

  getProject(id:string){

    return this.http.get(`${this._url}/projects/${id}`);
  }

  saveProjects(){
    
  }

}
