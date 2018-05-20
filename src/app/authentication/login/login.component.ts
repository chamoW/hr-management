import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;

	constructor(
		private router: Router,
		private formBuilder: FormBuilder,
		private authenticationService: AuthenticationService
	) {
		this.loginForm = this.formBuilder.group({
			user: [ '', [ Validators.required ] ],
			pass: [ '', [ Validators.required, Validators.minLength(4) ] ]
		});
	}

	ngOnInit() {}

	login() {
		const user = this.loginForm.get('user').value;
		const pass = this.loginForm.get('pass').value;
		this.authenticationService.login(user, pass);
		this.router.navigate([ 'management/home' ]);
	}
}
