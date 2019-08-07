import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectsComponent } from './list-projects.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SideNavComponent } from '../components/side-nav/side-nav.component';
import { AngularStickyThingsModule } from '@w11k/angular-sticky-things';

@NgModule({
  declarations: [
    ListProjectsComponent,
    SingleProjectComponent,
    TimeAgoPipe,
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    TooltipModule,
    AngularStickyThingsModule,
  ],
  exports: [
    ListProjectsComponent,
  ],
})
export class ProjectsModule { }
