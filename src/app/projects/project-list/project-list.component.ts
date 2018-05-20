import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Project } from '../../model/project.interface';
import { ProjectService } from '../projects.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: [ './project-list.component.scss' ]
})
export class ProjectListComponent implements OnInit {
	displayedColumns = [ 'name', 'teamSize', 'clientName', 'actions' ];

	listProjects: MatTableDataSource<Project>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private projectService: ProjectService, private router: Router) {
		console.log('employee list constructor');

		this.projectService.getProjects().subscribe((data) => {
			// Assign the data to the data source for the table to render
			this.listProjects = new MatTableDataSource(data);

			this.listProjects.sort = this.sort;
		});
	}

	ngOnInit() {}

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
		this.listProjects.filter = filterValue;
	}

	navigateTo(route: number, action: string) {
		this.router.navigate([ 'management/projects/addEdit/' + route + '/' + action ]);
	}
}
