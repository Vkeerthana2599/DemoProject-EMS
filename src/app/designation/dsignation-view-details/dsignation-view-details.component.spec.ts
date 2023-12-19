import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsignationViewDetailsComponent } from './dsignation-view-details.component';

describe('DsignationViewDetailsComponent', () => {
  let component: DsignationViewDetailsComponent;
  let fixture: ComponentFixture<DsignationViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsignationViewDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsignationViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
