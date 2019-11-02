import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Food6Component } from './food6.component';

describe('Food6Component', () => {
  let component: Food6Component;
  let fixture: ComponentFixture<Food6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Food6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Food6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
