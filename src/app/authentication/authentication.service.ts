import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	isLoggedIn = false;

	constructor() {}

	login(user: string, pass: string) {
		if (user === 'admin' && pass === '1234') {
			this.isLoggedIn = true;
		} else {
			this.isLoggedIn = false;
		}
	}

	logout() {
		this.isLoggedIn = false;
	}
}
