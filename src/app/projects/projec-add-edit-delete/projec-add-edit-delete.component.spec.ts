import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecAddEditDeleteComponent } from './projec-add-edit-delete.component';

describe('ProjecAddEditDeleteComponent', () => {
  let component: ProjecAddEditDeleteComponent;
  let fixture: ComponentFixture<ProjecAddEditDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjecAddEditDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecAddEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
