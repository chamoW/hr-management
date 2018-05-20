import { ProjectComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjecAddEditDeleteComponent } from './projec-add-edit-delete/projec-add-edit-delete.component';

@NgModule({
	imports: [ CommonModule, ReactiveFormsModule, SharedModule, ProjectRoutingModule ],
	declarations: [ ProjectComponent, ProjectListComponent, ProjecAddEditDeleteComponent ]
})
export class ProjectsModule {}
