import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../components/input-matcher';
import { ProjectService } from '../projects.service';
import { Router, ActivatedRoute } from '@angular/router';

import { pluck, switchMap } from 'rxjs/operators';
import { MatDatepickerInputEvent } from '@angular/material';
import { Project } from '../../model/project.interface';

@Component({
	selector: 'app-projec-add-edit-delete',
	templateUrl: './projec-add-edit-delete.component.html',
	styleUrls: [ './projec-add-edit-delete.component.scss' ]
})
export class ProjecAddEditDeleteComponent implements OnInit {
	routeReturn = 'management/projects/projectList';
	createEditDeleteForm: FormGroup;

	matcher = new MyErrorStateMatcher();

	title = '';

	paramId = 0;
	paramAction = '';

	constructor(
		private projectService: ProjectService,
		private router: Router,
		private formBuilder: FormBuilder,
		private activatedRoute: ActivatedRoute
	) {
		this.createEditDeleteForm = this.formBuilder.group({
			name: [ '', [ Validators.required ] ],
			teamSize: [ { value: '', disabled: true }, [] ],
			clientName: [ '', [ Validators.required ] ]
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
					this.createEditDeleteForm = this.formBuilder.group({
						name: [ '' ],
						teamSize: [ '' ],
						clientName: [ '' ]
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
		this.projectService.getProject(this.paramId).subscribe((data) => {
			this.createEditDeleteForm.get('name').setValue(data.name);
			this.createEditDeleteForm.get('teamSize').setValue(data.teamSize);
			this.createEditDeleteForm.get('clientName').setValue(data.clientName);
		});
	}

	private getId(): number {
		return Math.floor(Math.random() * 9999) + 1;
	}

	cancel() {
		this.router.navigate([ this.routeReturn ]);
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
				this.router.navigate([ this.routeReturn ]);
		}
	}

	create() {
		const project: Project = {
			id: this.getId(),
			name: this.createEditDeleteForm.get('name').value,
			teamSize: 0,
			clientName: this.createEditDeleteForm.get('clientName').value
		};

		this.projectService.saveProject(project).subscribe((result) => {
			this.router.navigate([ this.routeReturn ]);
		});
	}

	edit() {
		const project: Project = {
			id: this.paramId,
			name: this.createEditDeleteForm.get('name').value,
			teamSize: this.createEditDeleteForm.get('teamSize').value,
			clientName: this.createEditDeleteForm.get('clientName').value
		};

		const deleteAction$ = this.projectService.deleteProject(project.id);
		const resultActions$ = deleteAction$.pipe(
			switchMap(() => this.projectService.saveProject(project))
		);

		resultActions$.subscribe((response) => {
			this.router.navigate([ this.routeReturn ]);
		});
	}

	delete() {
		this.projectService.deleteProject(this.paramId).subscribe((result) => {
			this.router.navigate([ this.routeReturn ]);
		});
	}
}
