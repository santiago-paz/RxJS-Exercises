import { Component, OnInit } from '@angular/core';
import { interval, Observer, of, timer } from 'rxjs';
import { tap, delay, scan, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-tap-delay-scan',
  templateUrl: './rxjs-tap-delay-scan.component.html',
  styleUrls: ['./rxjs-tap-delay-scan.component.scss']
})
export class RxjsTapDelayScanComponent implements OnInit {

  events: Array<string> = [];

  myObservable = of('hola', 'hol', 'da', 'f', 'ddd').pipe(
    tap(v => { console.log('tap() es una utility') }),
    delay(1000),
    scan((v, i) => {
      return v + '_' + i;
    }, '__')
  );

  fib = interval(1000).pipe(
    scan((acc, v) => {
      return acc + v;
    })
  ).subscribe(
    v => {
      this.events.push(`${v}`);
    }
  )

  
  myObserver: Observer<string> = {
    next: v => { },
    error: v => { },
    complete: () => { },
  };

  ngOnInit(): void {
  }

}
