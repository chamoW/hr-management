import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './projects.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjecAddEditDeleteComponent } from './projec-add-edit-delete/projec-add-edit-delete.component';

const routes: Routes = [
	{
		path: '',
		component: ProjectComponent,
		children: [
			{
				path: 'projectList',
				component: ProjectListComponent
			},
			{
				path: 'addEdit/:id/:action',
				component: ProjecAddEditDeleteComponent
			},
			{
				path: '',
				redirectTo: 'projectList',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ProjectRoutingModule {}
