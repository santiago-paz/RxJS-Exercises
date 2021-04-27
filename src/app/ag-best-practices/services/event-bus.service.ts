import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export enum ActionType {
  UsersSelection,
  UsersCreation,
  UsersDeletion
}

export class Action {
  constructor(public actionType: ActionType, public data: any) { }
}

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private _actions$ = new Subject<Action>();
  constructor() { }

  on(type: ActionType, event: any) {
    return this._actions$.pipe(
      filter((v: Action) => {
        return v.actionType === type;
      }
      ),
      map((v: Action) => {
        return v.data;
      })
    ).subscribe(event);
  }

  emit(action: Action) {
    this._actions$.next(action);
  }

}
