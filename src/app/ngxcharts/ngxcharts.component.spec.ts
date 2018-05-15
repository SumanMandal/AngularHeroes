import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGXChartsComponent } from './ngxcharts.component';

describe('NGXChartsComponent', () => {
  let component: NGXChartsComponent;
  let fixture: ComponentFixture<NGXChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGXChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGXChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
