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
  selector: 'app-food5',
  animations:[
    trigger('youtiao-appear', [
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
      trigger('green-onion-appear', [
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
  templateUrl: './food5.component.html',
  styleUrls: ['./food5.component.scss']
})
export class Food5Component implements OnInit {
  
  IsOut = true;
  
  toggle_youtiao_greenonion() {
    this.IsOut = !this.IsOut;
  }
  constructor() { }

  ngOnInit() {
  }

}
