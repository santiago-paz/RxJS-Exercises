import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, interval, Observable, ReplaySubject, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { IUser } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _subjectUsuarios$!: Subject<IUser>;
  subjectUsuarios$!: Observable<IUser>;

  private _behaviorSubjectUsuarios$!: BehaviorSubject<IUser>;
  behaviorSubjectUsuarios$!: Observable<IUser>;

  private _replaySubjectUsuarios$!: ReplaySubject<IUser>;
  replaySubjectUsuarios$!: Observable<IUser>;

  private _asyncSubjectUsuarios$!: AsyncSubject<any>;
  asyncSubjectUsuarios$!: Observable<any>;

  constructor() { }

  start() {
    this._subjectUsuarios$ = new Subject<IUser>();
    this.subjectUsuarios$ = this._subjectUsuarios$.asObservable();

    this._behaviorSubjectUsuarios$ = new BehaviorSubject<IUser>({ name: 'default' });
    this.behaviorSubjectUsuarios$ = this._behaviorSubjectUsuarios$.asObservable();

    this._replaySubjectUsuarios$ = new ReplaySubject<IUser>();
    this.replaySubjectUsuarios$ = this._replaySubjectUsuarios$.asObservable();

    this._asyncSubjectUsuarios$ = new AsyncSubject<IUser>()
    this.asyncSubjectUsuarios$ = this._asyncSubjectUsuarios$.asObservable();

    interval(1000).pipe(
      take(11),
      map(v => {
        return {
          name: 'user ' + v,
        }
      }),
    ).subscribe((v: any) => {
      this._subjectUsuarios$.next(v);
      this._behaviorSubjectUsuarios$.next(v);
      this._replaySubjectUsuarios$.next(v);
      if (v.name === 'user 10') {
        this._asyncSubjectUsuarios$.complete();
      }
    });
  }
}
