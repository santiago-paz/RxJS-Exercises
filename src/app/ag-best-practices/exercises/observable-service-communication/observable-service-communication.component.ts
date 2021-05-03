import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/User';
import { ObservableService } from '../../services/observable.service';

@Component({
  selector: 'app-observable-service-communication',
  templateUrl: './observable-service-communication.component.html',
  styleUrls: ['./observable-service-communication.component.scss']
})
export class ObservableServiceCommunicationComponent {

  constructor(
    private observableService: ObservableService
  ) { }

  userName: FormControl = new FormControl('Santiago', [Validators.required])
  users: IUser[] = [];

  onAddUserButtonClick(event: any) {
    event.preventDefault();
    this.observableService.addUser({ name: this.userName.value }).subscribe
      ((res: IUser[]) => {
        this.users = res;
      })
    this.userName.setValue('');
  }
}
