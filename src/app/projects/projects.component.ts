import { ProjectsService } from '../services/projects.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  public productos:Array<any> = []

  constructor(
    private projectsService: ProjectsService
  ){

this.projectsService.getProjects().subscribe((resp:any) =>{
  console.log(resp)
  this.productos = resp
})

  }
}
