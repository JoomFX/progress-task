import { Project } from './../../common/interfaces/project';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {
  @Input() public project: Project;

  public expanded = false;

  constructor() { }

  ngOnInit() {
  }

  public onExpand(): void {
    this.expanded = !this.expanded;
  }

}
