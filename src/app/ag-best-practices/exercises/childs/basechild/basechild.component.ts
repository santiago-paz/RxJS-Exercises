import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/ag-best-practices/interfaces/User';

@Component({
  selector: 'app-basechild',
  template: '',
  styleUrls: []
})
export class BasechildComponent {
  constructor() { }

  @Input()
  user!: IUser;
}
