import { ProjectService } from './../../projects/projects.service';
import { EmployeesService } from './../employees.service';
import { Project } from './../../model/project.interface';
import { Employee } from './../../model/employee.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../components/input-matcher';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material';

import { pluck, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-employee-add-edit',
	templateUrl: './employee-add-edit.component.html',
	styleUrls: [ './employee-add-edit.component.scss' ]
})
export class EmployeeAddEditComponent implements OnInit {
	urlReturn = 'management/employees/employeeList';
	listProjects: Project[];

	project: Project = {
		id: 0,
		name: '',
		teamSize: 0,
		clientName: ''
	};

	createEditForm: FormGroup;

	matcher = new MyErrorStateMatcher();

	minDate = new Date(1930, 0, 1);
	maxDate = new Date();
	title = '';
	paramId = 0;
	paramAction = '';
	constructor(
		private employeeService: EmployeesService,
		private projectService: ProjectService,
		private router: Router,
		private formBuilder: FormBuilder,
		private activatedRoute: ActivatedRoute
	) {
		this.createEditForm = this.formBuilder.group({
			name: [ '', [ Validators.required ] ],
			company: [ '', [ Validators.required ] ],
			birthday: [ '', [ Validators.required ] ],
			age: [ { value: '', disabled: true }, [ Validators.required ] ],
			favoriteColor: [ '', [ Validators.required ] ],
			project: [ '', [ Validators.required ] ]
		});

		this.projectService.getProjects().subscribe((data) => {
			this.listProjects = data;
		});

		this.activatedRoute.paramMap.pipe<any>(pluck('params')).subscribe((value) => {
			console.log('VALORES RUTAS: ', value);
			this.paramId = Number(value.id);
			this.paramAction = value.action;

			switch (this.paramAction) {
				case 'create':
					this.title = 'Create';
					break;

				case 'edit':
					this.title = 'Edit';
					this.loadData();
					break;

				case 'delete':
					this.title = 'Delete';
					this.createEditForm = this.formBuilder.group({
						name: [ '' ],
						company: [ '' ],
						birthday: [ '' ],
						age: [ '' ],
						favoriteColor: [ '' ],
						project: [ '' ]
					});

					this.loadData();

					break;
				default:
					this.title = 'ACTION NO RECONOCIDA';
			}
		});
	}

	ngOnInit() {}

	private loadData() {
		this.employeeService.getEmployee(this.paramId).subscribe((data) => {
			this.createEditForm.get('name').setValue(data.name);
			this.createEditForm.get('company').setValue(data.company);
			this.createEditForm.get('age').setValue(data.age);
			this.createEditForm.get('birthday').setValue(data.birthday);
			this.createEditForm.get('favoriteColor').setValue(data.favoriteColor);
			this.createEditForm.get('project').setValue(data.project);
			this.project = data.project;
		});
	}

	private getId(): number {
		return Math.floor(Math.random() * 9999) + 1;
	}
	getBirthday(event: MatDatepickerInputEvent<Date>) {
		const now = new Date();
		const date = new Date(event.value);

		const nowMonth = now.getUTCMonth() + 1; // months from 1-12
		const nowDay = now.getUTCDate();
		const nowYear = now.getUTCFullYear();

		const myMonth_birth = date.getUTCMonth();
		const myDay_birth = date.getUTCDate();
		const myYear_birth = date.getUTCFullYear();

		let birthAge = nowYear - myYear_birth - 1; // not ur age yet

		if (nowMonth >= myMonth_birth) {
			// check if the day is now or passed
			if (nowDay >= myDay_birth) {
				// means ur birth month is now or passed
				birthAge += 1;
			}
		}

		this.createEditForm.get('age').setValue(birthAge);
	}

	cancel() {
		this.router.navigate([ this.urlReturn ]);
	}

	executeAction() {
		switch (this.paramAction) {
			case 'create':
				this.create();
				break;

			case 'edit':
				this.edit();
				break;

			case 'delete':
				this.delete();
				break;

			default:
				this.router.navigate([ this.urlReturn ]);
		}
	}

	create() {
		const project: Project = this.createEditForm.get('project').value;
		project.teamSize = project.teamSize + 1;

		const employee: Employee = {
			id: this.getId(),
			name: this.createEditForm.get('name').value,
			company: this.createEditForm.get('company').value,
			age: this.createEditForm.get('age').value,
			birthday: this.createEditForm.get('birthday').value,
			favoriteColor: this.createEditForm.get('favoriteColor').value,
			project: project
		};

		const saveAction$ = this.employeeService.saveEmployee(employee);
		const resultActions$ = saveAction$.pipe(
			switchMap(() => this.projectService.updateProject(project))
		);

		resultActions$.subscribe((response) => {
			this.router.navigate([ this.urlReturn ]);
		});
	}

	edit() {
		const employee: Employee = {
			id: this.paramId,
			name: this.createEditForm.get('name').value,
			company: this.createEditForm.get('company').value,
			age: this.createEditForm.get('age').value,
			birthday: this.createEditForm.get('birthday').value,
			favoriteColor: this.createEditForm.get('favoriteColor').value,
			project: this.createEditForm.get('project').value
		};

		this.employeeService.updateEmployee(employee).subscribe((response) => {
			this.router.navigate([ this.urlReturn ]);
		});
	}

	delete() {
		const project: Project = this.createEditForm.get('project').value;
		project.teamSize = project.teamSize - 1;

		const deleteAction$ = this.employeeService.deleteEmployee(this.paramId);
		const resultActions$ = deleteAction$.pipe(
			switchMap(() => this.projectService.updateProject(project))
		);

		resultActions$.subscribe((response) => {
			this.router.navigate([ this.urlReturn ]);
		});
	}
}
