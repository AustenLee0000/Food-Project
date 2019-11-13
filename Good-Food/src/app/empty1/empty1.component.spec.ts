import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Empty1Component } from './empty1.component';

describe('Empty1Component', () => {
  let component: Empty1Component;
  let fixture: ComponentFixture<Empty1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Empty1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Empty1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
