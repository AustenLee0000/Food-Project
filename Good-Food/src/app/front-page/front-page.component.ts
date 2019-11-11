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
    
  ],
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  
  open = true;

  toggle_frontpage() {
    this.open = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
