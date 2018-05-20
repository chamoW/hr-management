import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.interface';

@Injectable({
	providedIn: 'root'
})
export class EmployeesService {
	constructor(private httpClient: HttpClient) {}

	getEmployees(): Observable<Employee[]> {
		return this.httpClient.get<Employee[]>(environment.employees);
	}

	getEmployee(id: number): Observable<Employee> {
		return this.httpClient.get<Employee>(environment.employees + '/' + id);
	}
	saveEmployee(employee: Employee) {
		return this.httpClient.post(environment.employees, employee);
	}

	updateEmployee(employee: Employee) {
		return this.httpClient.put(environment.employees, employee);
	}

	deleteEmployee(id: number) {
		return this.httpClient.delete(environment.employees + '/' + id);
	}
}
