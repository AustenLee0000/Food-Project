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
  selector: 'app-food2',
  animations: [
    trigger('fish-appear', [
      state('in', style({
        transform: 'translate(0,0) ',
      })),
      state('out', style({
        transform: 'translate(-200px, -100px)',
      })),
      transition('in => out', [
        query('div', [
          style({transform: 'translate(0)', opacity: 0}),
          stagger('0.25s', [
            group([
              animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(-200px, -100px) '})),
              animate('0.5s ease-in', style({opacity: 1}))
            ]),
          ])
        ])
      ]),
      transition('out => in', [
        query('div', [
          style({transform: 'translate(0)',opacity: 1}),
          stagger('-0.25s', [
            group([
              animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(200px, 100px)'})),
              animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 0}))
            ])
          ])
        ])
      ])
    ]),
    trigger('vinegar-appear', [
      state('in', style({
        transform: 'translate(0,0)',
      })),
      state('out', style({
        transform: 'translate(200px, 100px) '
      })),
      transition('in => out', [
        query('div', [
          style({transform: 'translate(0)', opacity: 0}),
          stagger('0.25s', [
            group([
              animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(200px, 100px)'})),
              animate('0.5s ease-in', style({opacity: 1}))
            ]),
          ])
        ])
      ]),
      transition('out => in', [
        query('div', [
          style({transform: 'translate(0)', opacity: 1}),
          stagger('-0.25s', [
            group([
              animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translate(-200px , -100px)'})),
              animate('0.5s ease-in', style({opacity: 0}))
            ]),
          ])
        ])
      ])
    ])
  ],
  templateUrl: './food2.component.html',
  styleUrls: ['./food2.component.scss']
})
export class Food2Component implements OnInit {

  IsOut = true;
  
  toggle_fish_vinegar() {
    this.IsOut = !this.IsOut;
  }

  constructor() { }

  ngOnInit() {
  }

}
