import { Component } from '@angular/core';
import { BasechildComponent } from '../basechild/basechild.component';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent extends BasechildComponent {

  constructor() {
    super();
  }
}
