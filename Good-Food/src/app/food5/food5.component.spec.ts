import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Food5Component } from './food5.component';

describe('Food5Component', () => {
  let component: Food5Component;
  let fixture: ComponentFixture<Food5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Food5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Food5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
