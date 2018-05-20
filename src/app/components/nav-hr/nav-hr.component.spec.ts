import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHrComponent } from './nav-hr.component';

describe('NavHrComponent', () => {
	let component: NavHrComponent;
	let fixture: ComponentFixture<NavHrComponent>;

	beforeEach(
		fakeAsync(() => {
			TestBed.configureTestingModule({
				declarations: [ NavHrComponent ]
			}).compileComponents();

			fixture = TestBed.createComponent(NavHrComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		})
	);

	it('should compile', () => {
		expect(component).toBeTruthy();
	});
});
