import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		AuthenticationRoutingModule,
		SharedModule,
		FlexLayoutModule
	],
	declarations: [ LoginComponent ],
	exports: [ LoginComponent ]
})
export class AuthenticationModule {}
