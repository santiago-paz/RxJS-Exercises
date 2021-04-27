import { Component, OnInit } from '@angular/core';
import { Action, ActionType, EventBusService } from '../../services/event-bus.service';

@Component({
  selector: 'app-event-bus',
  templateUrl: './event-bus.component.html',
  styleUrls: ['./event-bus.component.scss']
})
export class EventBusComponent implements OnInit {

  constructor(
    private eventBusService: EventBusService
  ) { }

  events: string[] = [];

  ngOnInit(): void {
    this.eventBusService.on(ActionType.UsersCreation, (data: any) => {
      this.events.push('Se creó un usuario, id: ' + data.id)
    });
    this.eventBusService.on(ActionType.UsersDeletion, (data: any) => {
      this.events.push('Se eliminó un usuario, id: ' + data.id)
    });
  }

  onCreateUserButtonClick() {
    const action
      = new Action(ActionType.UsersCreation, { id: Math.floor(Math.random() * 50) });
    this.eventBusService.emit(action);
  }

  onDeleteUserButtonClick() {
    const action
      = new Action(ActionType.UsersDeletion, { id: Math.floor(Math.random() * 50) });
    this.eventBusService.emit(action);
  }

}
