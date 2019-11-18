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
  useAnimation
} from '@angular/animations';
import { InToOutAnimation, OutToInAnimation } from '../animation';

@Component({
  selector: 'app-food7',
  animations:[
        trigger('flower-appear', [
          state('in', style({
            transform: 'translate(0,0)',
          })),
          state('out', style({
            transform: 'translate(-200px, -100px) '
          })),
          transition('in => out', [
            useAnimation(InToOutAnimation, {
              params: {
                transformInToOut: 'translate(-200px, -100px)'
              }
            })
          ]),
          transition('out => in', [
            useAnimation(OutToInAnimation, {
              params:{
                transformOutToIn: 'translate(200px, 100px)'
              }
            })
          ])
        ]),

        trigger('lotus-appear', [
          state('in', style({
            transform: 'translate(0,0)',
          })),
          state('out', style({
            transform: 'translate(200px, 100px) '
          })),
          transition('in => out', [
            useAnimation(InToOutAnimation, {
              params: {
                transformInToOut: 'translate(200px, 100px)'
              }
            })
          ]),
          transition('out => in', [
            useAnimation(OutToInAnimation, {
              params:{
                transformOutToIn: 'translate(-200px, -100px)'
              }
            })
          ])
        ]),
      trigger('ingredient-appear', [
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
      ]),trigger('ingredient-appear', [
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
  templateUrl: './food7.component.html',
  styleUrls: ['./food7.component.scss']
})
export class Food7Component implements OnInit {
  IsOut = true;
  
  toggle_lotus_flower() {
    this.IsOut = !this.IsOut;
  }
  constructor() { }

  ngOnInit() {
  }

}
