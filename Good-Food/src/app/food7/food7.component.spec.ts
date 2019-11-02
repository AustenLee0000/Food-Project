import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Food7Component } from './food7.component';

describe('Food7Component', () => {
  let component: Food7Component;
  let fixture: ComponentFixture<Food7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Food7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Food7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
