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
    // trigger('desk-rotation', [
    //   state('initial', style({transform: 'rotate(0)'})),
    //   state('fianl', style({transform:'rotate(360deg)'})),
    //   transition('initial => final', [
    //     animate('15s', keyframes([
    //       style({transform: 'rotate(0)', offset: 0 }),
    //       style({transform: 'rotate(180deg)', offset: 0.5}),
    //       style({transform: 'rotate(360deg)', offset: 1})
    //     ]))
    //   ]),
    // ]),

    trigger('blur-background', [
      state('blur', style({filter: 'blur(6px)'})),
      state('notblur', style({filter: 'none'})),
      transition('blue <=> notblur', [
        animate( '1s')
      ])
    ]),

    trigger('on-click-big', [
        state('on-click', style({transform: 'scale(1.2)'})),
        state('off-click', style({transform: 'scale(1)'})),
        transition('on-click <=> off-click', [
          animate('1s')
        ])
    ]),

    trigger('ChangeOpacity', [
      state('full-opacity', style({opacity: 1})),
      state('zero-opacity', style({opacity: 0})),
      transition('full-opacity <=> zero-opacity', [
        animate('100ms')
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

  plate_number = 0;
  toggle_plate1() {
    if (this.plate_number == 0){
      this.plate_number = 1;
    }
    else this.plate_number = 0;
  }

  toggle_plate2() {
    if (this.plate_number == 0){
      this.plate_number = 2;
    }
    else this.plate_number = 0;
  }

  toggle_plate3() {
    if (this.plate_number == 0){
      this.plate_number = 3;
    }
    else this.plate_number = 0;
  }

  toggle_plate4() {
    if (this.plate_number == 0){
      this.plate_number = 4;
    }
    else this.plate_number = 0;
  }

  toggle_plate5() {
    if (this.plate_number == 0){
      this.plate_number = 5;
    }
    else this.plate_number = 0;
  }

  toggle_plate6() {
    if (this.plate_number == 0){
      this.plate_number = 6;
    }
    else this.plate_number = 0;
  }

  toggle_plate7() {
    if (this.plate_number == 0){
      this.plate_number = 7;
    }
    else this.plate_number = 0;
  }

  toggle_plate8() {
    if (this.plate_number == 0){
      this.plate_number = 8;
    }
    else this.plate_number = 0;
  }

  order = 0;

  toggle_order() {
    this.order = this.order + 1;
  }

  

  
  
  constructor() { }

  ngOnInit() {
  }

}
