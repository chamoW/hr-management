import { Project } from './project.interface';

export interface Employee {
	id: number;
	name: string;
	company: string;
	age: number;
	birthday: string;
	favoriteColor: string;
	project: Project;
}
