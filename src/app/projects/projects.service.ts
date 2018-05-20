import { Project } from './../model/project.interface';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {
	constructor(private httpClient: HttpClient) {}

	getProjects(): Observable<Project[]> {
		return this.httpClient.get<Project[]>(environment.projects);
	}

	saveProject(project: Project) {
		return this.httpClient.post(environment.projects, project);
	}

	updateProject(project: Project) {
		return this.httpClient.put(environment.projects, project);
	}

	getProject(id: number): Observable<Project> {
		return this.httpClient.get<Project>(environment.projects + '/' + id);
	}

	deleteProject(id: number) {
		return this.httpClient.delete(environment.projects + '/' + id);
	}
}
