import {
    trigger,
    state,
    transition, 
    animate, 
    style, 
    query,
    stagger,
    animation
  } from '@angular/animations';

  // export const GredientAnimation = animation([
  //     state('in', style({
  //       transform: '{{transformOrigin}}',
  //     })),
  //     state('out', style({
  //       transform: '{{transformFinal}} '
  //     })),
  //     transition('in => out', [
  //       query('div', [
  //         style({transform: 'translate(0)'}),
  //         stagger('0.25s', [
  //           animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: '{{tansformInToOut}}'})),
  //         ])
  //       ])
  //     ]),
  //     transition('out => in', [
  //       query('div', [
  //         style({transform: 'translate(0)'}),
  //         stagger('-0.25s', [
  //           animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: '{{ transformInToOut }}'})),
  //         ])
  //       ])
  //     ])
  // ])

  export const InToOutAnimation = animation([
    query('div', [
      style({transform: 'translate(0)'}),
      stagger('0.25s', [
        animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: '{{ transformInToOut }}'})),
      ])
    ])
  ])

  export const OutToInAnimation = animation([
    query('div', [
      style({transform: 'translate(0)'}),
      stagger('0.25s', [
        animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: '{{transformOutToIn}}'})),
      ])
    ])
  ])
  