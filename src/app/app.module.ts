import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NavHrComponent } from './components/nav-hr/nav-hr.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './in-memory.service';
import { FormsModule } from '@angular/forms';
import { PageForbiddenComponent } from './components/page-forbidden/page-forbidden.component';

@NgModule({
	declarations: [ AppComponent, NavHrComponent, PageNotFoundComponent, HomeComponent, PageForbiddenComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		SharedModule,
		FlexLayoutModule,
		AppRoutingModule,
		AuthenticationModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryService)
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
