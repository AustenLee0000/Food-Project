import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger
} from '@angular/animations';


@Component({
  selector: 'app-food1',
  animations:[
    trigger('flour-appear', [
      state('in', style({
        transform: 'translate(0,0)',
      })),
      state('out', style({
        transform: 'translate(-200px, -100px) '
      })),
      transition('in => out' ,[
        animate('0.2s' , keyframes([
          style({transform: 'translate(0,0)', offset: 0}),
          style({transform:'translate(-75px, -70px)', offset: 0.5}),
          style({ transform: 'translate(-200px, -100px)',offset: 1})
        ]))
      ]),
      transition('out => in', [
        animate('0.2s', keyframes([
          style({transform: 'translate(-200px, -100px)', offset: 0}),
          style({transform: 'translate(-75px, -70px)', offset: 0.5}),
          style({transform: 'translate(0,0)', offset: 1})
        ]) )
      ])
    ]),
    trigger('pork-appear', [
      state('in', style({
        transform: 'translate(0,0)' ,
      })),
      state('out', style({
        transform: 'translate(200px, 100px)'
      })),
      transition('in => out' ,[
        animate('0.2s' , keyframes([
          style({transform: 'translate(0,0)', offset: 0}),
          style({transform:'translate(75px, 70px)', offset: 0.5}),
          style({ transform: 'translate(200px, 100px)',offset: 1})
        ]))
      ]),
      transition('out => in', [
        animate('0.2s', keyframes([
          style({transform: 'translate(200px, 100px)', offset: 0}),
          style({transform: 'translate(75px, 70px)', offset: 0.5}),
          style({transform: 'translate(0,0)', offset: 1})
        ]) )
      ])
    ])
  ],
  templateUrl: './food1.component.html',
  styleUrls: ['./food1.component.scss']
})
export class Food1Component implements OnInit {

  IsOut = true;
  
  toggle_flour_pork() {
    this.IsOut = !this.IsOut;
  }

  constructor() { }

  ngOnInit() {
  }

}
