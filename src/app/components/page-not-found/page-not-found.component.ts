import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-page-not-found',
	templateUrl: './page-not-found.component.html',
	styleUrls: [ './page-not-found.component.scss' ]
})
export class PageNotFoundComponent implements OnInit {
	timer = 0;

	constructor(private router: Router) {
		setTimeout(() => {
			this.router.navigate([ '/login' ]);
		}, 3000);
	}

	ngOnInit() {}
}
