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
      trigger('pork-appear', [
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
      ,trigger('ingredient-appear', [
        state('in', style({
          transform: 'translate(0,0)',
        })),
        state('out', style({
          transform: 'translate(600px, 0px) '
        })),
        transition('out => in', [
          query('div', [
            style({transform: 'translate(0)'}),
            stagger('0.25s', [
              animate('0.25s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(-600px, 0px)'})),
            ])
          ])
        ]),
        transition('in => out', [
          query('div', [
            style({transform: 'translate(0)'}),
            stagger('-0.25s', [
              animate('0.25s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(600px , 0px)'})),
            ])
          ])
        ])
      ]),trigger('story-appear', [
        state('in', style({
          transform: 'translate(0,0)',
        })),
        state('out', style({
          transform: 'translate(-600px, 0px) '
        })),
        transition('out => in', [
          query('div', [
            style({transform: 'translate(0)'}),
            stagger('0.25s', [
              animate('0.25s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(600px, 0px)'})),
            ])
          ])
        ]),
        transition('in => out', [
          query('div', [
            style({transform: 'translate(0)'}),
            stagger('-0.25s', [
              animate('0.25s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(-600px , 0px)'})),
            ])
          ])
        ])
      ]),
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
