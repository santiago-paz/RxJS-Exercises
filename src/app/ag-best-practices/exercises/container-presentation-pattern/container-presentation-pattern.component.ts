import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/User';

@Component({
  selector: 'app-container-presentation-pattern',
  templateUrl: './container-presentation-pattern.component.html',
  styleUrls: ['./container-presentation-pattern.component.scss']
})
export class ContainerPresentationPatternComponent implements OnInit {

  user: IUser = {
    name: 'test'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
