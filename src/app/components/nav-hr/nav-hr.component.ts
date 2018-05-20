import { Router } from '@angular/router';
import { AuthenticationService } from './../../authentication/authentication.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-nav-hr',
	templateUrl: './nav-hr.component.html',
	styleUrls: [ './nav-hr.component.css' ]
})
export class NavHrComponent {
	title = 'app';

	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
	constructor(
		private breakpointObserver: BreakpointObserver,
		private authenticationService: AuthenticationService,
		private router: Router
	) {}

	logout() {
		this.authenticationService.logout();
		this.router.navigate([ '/login' ]);
	}
}
