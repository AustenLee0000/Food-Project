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
  selector: 'app-food3',
  animations: [
    trigger('shrimp-appear', [
      state('in', style({
        transform: 'translate(0,0)',
      })),
      state('out', style({
        transform: 'translate(-200px, -100px)',
      })),
      transition('in => out', [
        query('div', [
          style({transform: 'translate(0)'}),
          stagger('0.25s', [
            group([
              animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(-200px, -100px)'})),
            ]),
          ])
        ])
      ]),
      transition('out => in', [
        query('div', [
          style({transform: 'translate(0)'}),
          stagger('-0.25s', [
            group([
              animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(200px, 100px)'})),
            ])
          ])
        ])
      ])
    ]),

    trigger('tea-appear', [
      state('in', style({
        transform: 'translate(0,0)',
      })),
      state('out', style({
        transform: 'translate(200px, 100px) '
      })),
      transition('in => out', [
        query('div', [
          style({transform: 'translate(0)'}),
          stagger('0.25s', [
            group([
              animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(200px, 100px)'})),
            ]),
          ])
        ])
      ]),
      transition('out => in', [
        query('div', [
          style({transform: 'translate(0)'}),
          stagger('-0.25s', [
            group([
              animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(-200px , -100px)'})),
            ]),
          ])
        ])
      ])
    ])
  ],
  templateUrl: './food3.component.html',
  styleUrls: ['./food3.component.scss']
})
export class Food3Component implements OnInit {
  IsOut = true;
  
  toggle_shrimp_tea() {
    this.IsOut = !this.IsOut;
  }

  
  constructor() { }

  ngOnInit() {
  }

}
