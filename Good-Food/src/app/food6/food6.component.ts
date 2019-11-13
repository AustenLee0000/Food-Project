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
  selector: 'app-food6',
  animations:[
    trigger('sun-appear', [
      state('in', style({
        transform: 'translate(0,0)',
      })),
      state('out', style({
        transform: 'translate(-200px, 50px) '
      })),
      transition('in => out', [
        query('div', [
          style({transform: 'translate(0)'}),
          stagger('0.25s', [
            animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(-200px, 50px)'})),
          ])
        ])
      ]),
      transition('out => in', [
        query('div', [
          style({transform: 'translate(0)'}),
          stagger('-0.25s', [
            animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(200px , -50px)'})),
          ])
        ])
      ])
    ]),
    trigger('pork-appear', [
      state('in', style({
        transform: 'translate(0,0)',
      })),
      state('out', style({
        transform: 'translate(200px, -80px) '
      })),
      transition('in => out', [
        query('div', [
          style({transform: 'translate(0)'}),
          stagger('0.25s', [
            animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(200px,-80px)'})),
          ])
        ])
      ]),
      transition('out => in', [
        query('div', [
          style({transform: 'translate(0)'}),
          stagger('-0.25s', [
            animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(-200px , 80px)'})),
          ])
        ])
      ])
    ]),
    trigger('noodle-appear', [
      state('in', style({
        transform: 'translate(0,0)',
      })),
      state('out', style({
        transform: 'translate(-200px, -100px) '
      })),
      transition('in => out', [
        query('div', [
          style({transform: 'translate(0)'}),
          stagger('0.25s', [
            animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(-200px, -100px)'})),
          ])
        ])
      ]),
      transition('out => in', [
        query('div', [
          style({transform: 'translate(0)'}),
          stagger('-0.25s', [
            animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(200px , 100px)'})),
          ])
        ])
      ])
    ]),
      trigger('xuecai-appear', [
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
              animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(200px, 100px)'})),
            ])
          ])
        ]),
        transition('out => in', [
          query('div', [
            style({transform: 'translate(0)'}),
            stagger('-0.25s', [
              animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(-200px , -100px)'})),
            ])
          ])
        ])
      ])
  ],
  templateUrl: './food6.component.html',
  styleUrls: ['./food6.component.scss']
})

export class Food6Component implements OnInit {
  IsOut = true;
  
  toggle_ingredient_noodle() {
    this.IsOut = !this.IsOut;
  }
  constructor() { }

  ngOnInit() {
  }

}
