import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskFoodComponent } from './desk-food.component';

describe('DeskFoodComponent', () => {
  let component: DeskFoodComponent;
  let fixture: ComponentFixture<DeskFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
