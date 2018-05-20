import { LoginComponent } from './authentication/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavHrComponent } from './components/nav-hr/nav-hr.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AutenticationGuard } from './authentication/autentication.guard';
import { PageForbiddenComponent } from './components/page-forbidden/page-forbidden.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{
		path: 'management',
		component: NavHrComponent,
		canActivate: [ AutenticationGuard ],
		children: [
			{
				path: 'home',
				component: HomeComponent
			},
			{
				path: 'employees',
				loadChildren: './employees/employees.module#EmployeesModule',
				canLoad: [ AutenticationGuard ]
			},
			{
				path: 'projects',
				loadChildren: './projects/projects.module#ProjectsModule',
				canLoad: [ AutenticationGuard ]
			},
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full'
			}
		]
	},
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'error404', component: PageNotFoundComponent },
	{ path: 'error403', component: PageForbiddenComponent },
	{ path: '**', redirectTo: 'error404' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
