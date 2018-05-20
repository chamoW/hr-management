import { Employee } from './model/employee.interface';
import { Project } from './model/project.interface';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryService implements InMemoryDbService {
	project1: Project = {
		id: 1,
		name: 'Authentication Moduel',
		teamSize: 3,
		clientName: 'Todo1'
	};

	project2: Project = {
		id: 2,
		name: 'Cash Management',
		teamSize: 2,
		clientName: 'LaFise'
	};
	project3: Project = {
		id: 3,
		name: 'Account Module',
		teamSize: 1,
		clientName: 'Bancolombia'
	};

	// EMPLOYEES

	employee1: Employee = {
		id: 1,
		name: 'Wladimir Lopez',
		company: 'Todo1',
		age: 0,
		birthday: '',
		favoriteColor: 'blue',
		project: this.project1
	};

	employee2: Employee = {
		id: 2,
		name: 'Jonathan Lopez',
		company: 'Extarnal',
		age: 0,
		birthday: '',
		favoriteColor: 'Red',
		project: this.project3
	};
	employee3: Employee = {
		id: 3,
		name: 'Elizabeth Campoverde',
		company: 'Semplades',
		age: 0,
		birthday: '',
		favoriteColor: 'purple',
		project: this.project1
	};
	employee4: Employee = {
		id: 4,
		name: 'Hernan Ludena',
		company: 'Todo1',
		age: 0,
		birthday: '',
		favoriteColor: 'back',
		project: this.project2
	};
	employee5: Employee = {
		id: 5,
		name: 'Gabriela Tipan',
		company: 'Todo1',
		age: 0,
		birthday: '',
		favoriteColor: 'blue',
		project: this.project1
	};

	employee6: Employee = {
		id: 6,
		name: 'Nicole Zambrano',
		company: 'Todo1 Restaurant',
		age: 0,
		birthday: '',
		favoriteColor: 'blue',
		project: this.project2
	};
	createDb() {
		const projects: Project[] = [ this.project1, this.project2, this.project3 ];
		const employees: Employee[] = [
			this.employee1,
			this.employee2,
			this.employee3,
			this.employee4,
			this.employee5,
			this.employee6
		];
		return { projects, employees };
	}
}
