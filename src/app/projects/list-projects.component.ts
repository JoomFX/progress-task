import { Component, OnInit } from '@angular/core';
import { ProjectsDataService } from './services/projects-data.service';
import { Project } from './../common/interfaces/project';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {
  public projects: Project[] = [];
  public menuItems = ['Menu Item 1', 'Menu Item 2', 'Menu Item 3', 'Menu Item 4'];

  constructor(
    private readonly projectsDataService: ProjectsDataService
  ) { }

  ngOnInit() {
    this.projectsDataService.getData().subscribe(
      (data) => this.projects = data.projects
    );
  }

  // TEST

}
