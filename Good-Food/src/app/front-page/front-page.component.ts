import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger,
  group
} from '@angular/animations';

@Component({
  selector: 'app-front-page',
  animations: [
    trigger('RollOut', [
      state('roll-out', style({transform: 'translateX(-100px)'})),
      state('roll-in', style({transform: 'translateX(400px)'})),
      transition('roll-out => roll-in',[
        group([
          animate('3s', keyframes([
            style({transform: 'translate(0px, 0) rotate(0)',offset: 0}),
            style({transform: 'translate(100px,0) rotate(180deg) ', offset: 0.25}),
            style({transform: 'translate(200px,0) rotate(360deg)', offset: 0.5}),
            style({transform: 'translate(300px,0) rotate(540deg)', offset: 0.75}),
            style({transform: 'translate(400px,0) rotate(720deg) ', offset: 1})
          ]))
        ])
      ])
    ])
  ],
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  
  open = true;

  toggle_frontpage() {
    this.open = !this.open;
  }
  constructor() { }

  ngOnInit() {
  }

}
