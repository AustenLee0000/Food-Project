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
  group,
  useAnimation
} from '@angular/animations';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
  
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
