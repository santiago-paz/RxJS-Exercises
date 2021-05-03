import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-basics',
  templateUrl: './rxjs-basics.component.html',
  styleUrls: ['./rxjs-basics.component.scss']
})
export class RxjsBasicsComponent {

  events: Array<string> = [];
  observable: Observable<any> = interval(1000).pipe(
    map(n => { return n + 1 })
  );;

  onSubscribeButtonClick() {
    this.observable.subscribe(n => {
      this.events.push(`A value was emitted at ${n} seconds`);
    });
  }
}
