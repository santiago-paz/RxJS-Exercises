import { Component, OnInit } from '@angular/core';
import { interval, Observable, fromEvent } from 'rxjs';
import { shareReplay, skipUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-skipuntil-sharereplay',
  templateUrl: './rxjs-skipuntil-sharereplay.component.html',
  styleUrls: ['./rxjs-skipuntil-sharereplay.component.scss']
})
export class RxjsSkipuntilSharereplayComponent implements OnInit {

  events: Array<string> = [];
  obs = fromEvent(document, 'click');
  obs2 = interval(1000).pipe(
    skipUntil(this.obs),
    shareReplay()
  );

  constructor() { }

  ngOnInit(): void {
    this.obs2.subscribe(v => {
      this.events.push(v.toString());
    })
  }

}
