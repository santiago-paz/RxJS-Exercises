import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/User';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-communication-between-components',
  templateUrl: './communication-between-components.component.html',
  styleUrls: ['./communication-between-components.component.scss']
})
export class CommunicationBetweenComponentsComponent implements OnInit {

  subjectUsers: IUser[] = [];
  behaviorSubjectUsers: IUser[] = [];
  replaySubjectUsers: IUser[] = [];
  asyncSubjectUsers: IUser[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.start();
  }

  onSubjectButtonClick() {
    this.usersService.subjectUsuarios$.subscribe(res => {
      this.subjectUsers.push(res);
    });
  }

  onBehaviorSubjectButtonClick() {
    this.usersService.behaviorSubjectUsuarios$.subscribe(res => {
      this.behaviorSubjectUsers.push(res);
    });
  }

  onReplaySubjectButtonClick() {
    this.usersService.replaySubjectUsuarios$.subscribe(res => {
      this.replaySubjectUsers.push(res);
    });
  }
  
  onCallAsyncSubjectButtonClick() {
    this.usersService.asyncSubjectUsuarios$.subscribe(res => {
      console.log(res);
      this.asyncSubjectUsers.push(res);
    });
  }
}
