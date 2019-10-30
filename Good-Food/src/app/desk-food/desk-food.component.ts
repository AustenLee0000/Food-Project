import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';


@Component({
  selector: 'app-desk-food',
  animations:[
    trigger('desk-rotation', [
      state('initial', style({transform: 'rotate(0)'})),
      state('fianl', style({transform:'rotate(360deg)'})),
      transition('initial => final', [
        animate('15s', keyframes([
          style({transform: 'rotate(0)', offset: 0 }),
          style({transform: 'rotate(180deg)', offset: 0.5}),
          style({transform: 'rotate(360deg)', offset: 1})
        ]))
      ]),
    ]),

    trigger('blur-background', [
      state('blur', style({filter: 'blur(6px)'})),
      state('notblur', style({filter: 'none'})),
      transition('blue <=> notblur', [
        animate( '1s')
      ])
    ])
  ],
  templateUrl: './desk-food.component.html',
  styleUrls: ['./desk-food.component.scss']
})
export class DeskFoodComponent implements OnInit {
  rotating = true;
  toggle_rotate() {
    this.rotating = !this.rotating
  }

  clickin = true;
  toggle_blur() {
    this.clickin = !this.clickin;
  }

  constructor() { }

  ngOnInit() {
  }

}
