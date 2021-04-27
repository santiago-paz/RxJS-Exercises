import { Component, OnInit } from '@angular/core';
import { BasechildComponent } from '../basechild/basechild.component';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent extends BasechildComponent {

  constructor() {
    super();
  }

}
