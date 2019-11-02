import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Food8Component } from './food8.component';

describe('Food8Component', () => {
  let component: Food8Component;
  let fixture: ComponentFixture<Food8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Food8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Food8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
