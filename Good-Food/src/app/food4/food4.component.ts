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
  selector: 'app-food4',
  animations: [
    trigger('redbean-appear', [
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

    trigger('stickyrice-appear', [
      state('in', style({
        transform: 'translate(0,0)',
      })),
      state('out', style({
        transform: 'translate(200px, -100px) '
      })),
      transition('in => out', [
        query('div', [
          style({transform: 'translate(0)'}),
          stagger('0.25s', [
            group([
              animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(200px, -100px)'})),
            ]),
          ])
        ])
      ]),
      transition('out => in', [
        query('div', [
          style({transform: 'translate(0)'}),
          stagger('-0.25s', [
            group([
              animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(-200px , 100px)'})),
            ]),
          ])
        ])
      ])
    ]),
    trigger('wormwood-appear', [
      state('in', style({
        transform: 'translate(0,0)',
      })),
      state('out', style({
        transform: 'translate(0px, 200px) '
      })),
      transition('in => out', [
        query('div', [
          style({transform: 'translate(0)'}),
          stagger('0.25s', [
            group([
              animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(0px, 200px)'})),
            ]),
          ])
        ])
      ]),
      transition('out => in', [
        query('div', [
          style({transform: 'translate(0)'}),
          stagger('-0.25s', [
            group([
              animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(0px , -200px)'})),
            ]),
          ])
        ])
      ])
    ])
  ],
  templateUrl: './food4.component.html',
  styleUrls: ['./food4.component.scss']
})
export class Food4Component implements OnInit {
  IsOut = true;
  
  toggle_sticky_red_worm() {
    this.IsOut = !this.IsOut;
  }
  constructor() { }

  ngOnInit() {
  }

}
