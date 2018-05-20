import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employees.component';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';

const routes: Routes = [
	{
		path: '',
		component: EmployeeComponent,
		children: [
			{
				path: 'employeeList',
				component: EmployeeListComponent
			},
			{
				path: 'addEdit/:id/:action',
				component: EmployeeAddEditComponent
			},
			{
				path: '',
				redirectTo: 'employeeList',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class EmployeesRoutingModule {}
