import { Router } from '@angular/router';
import { Employee } from './../../model/employee.interface';
import { EmployeesService } from './../employees.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatSortable } from '@angular/material';

@Component({
	selector: 'app-employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: [ './employee-list.component.scss' ]
})
export class EmployeeListComponent implements OnInit {
	displayedColumns = [
		'name',
		'company',
		'age',
		'birthday',
		'favoriteColor',
		'project',
		'actions'
	];
	listEmployees: MatTableDataSource<Employee>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private employeesService: EmployeesService, private router: Router) {
		console.log('employee list constructor');

		this.employeesService.getEmployees().subscribe((data) => {
			// Assign the data to the data source for the table to render
			this.listEmployees = new MatTableDataSource(data);

			this.listEmployees.sort = this.sort;
		});
	}

	ngOnInit() {}

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
		this.listEmployees.filter = filterValue;
	}

	navigateTo(route: number, action: string) {
		this.router.navigate([ 'management/employees/addEdit/' + route + '/' + action ]);
	}
}
