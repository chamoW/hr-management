import { EmployeesService } from './employees.service';
import { EmployeesRoutingModule } from './employees-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employees.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
	imports: [ CommonModule, ReactiveFormsModule, SharedModule, EmployeesRoutingModule ],
	declarations: [ EmployeeComponent, EmployeeListComponent, EmployeeAddEditComponent ],
	providers: [ EmployeesService ]
})
export class EmployeesModule {}
