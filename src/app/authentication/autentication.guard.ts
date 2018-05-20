import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	CanLoad,
	Route,
	Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AutenticationGuard implements CanActivate, CanLoad {
	constructor(private authenticationService: AuthenticationService, private router: Router) {}
	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		console.log('CAN ACTIVATE');

		if (this.authenticationService.isLoggedIn) {
			return true;
		}

		// Navigate to forbidden
		this.router.navigate([ '/error403' ]);
		return false;
	}

	canLoad(route: Route): boolean {
		console.log('CAN LOAD');

		const url = `/${route.path}`;

		if (this.authenticationService.isLoggedIn) {
			return true;
		}

		// Navigate to the login page with extras
		this.router.navigate([ '/login' ]);
		return false;
	}
}
