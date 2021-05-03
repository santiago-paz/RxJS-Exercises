import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IUser } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  private _users: BehaviorSubject<Array<IUser>> = new BehaviorSubject([{ name: 'Santiago' }]);
  users$: Observable<Array<IUser>> = this._users.asObservable();

  private users: IUser[] = [];

  constructor() { }

  addUser(user: IUser): Observable<Array<IUser>> {
    this.users.push(user);
    this._users.next(this.users);
    return of(this.users);
  }
}
