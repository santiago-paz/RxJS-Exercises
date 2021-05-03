import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-tap',
  templateUrl: './rxjs-tap.component.html',
  styleUrls: ['./rxjs-tap.component.scss']
})
export class RxjsTapComponent implements OnInit {

  observable: Observable<number> = of(1, 2, 3, 4, 5);
  events: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSubscribeButtonClick() {
    const pipeFunctions = pipe(
      map((n: number) => { return n + 1 }),
      // Kinda spy inside the observable pipe:
      tap(
        (next: number) => {
          this.events.push(`Next called from tap: ${next}`)
        },
        (error: any) => {
          this.events.push(`Error called from tap: ${error}`)
        },
        () => {
          this.events.push(`Complete called from tap.`)
        }
      ),
    )(this.observable).subscribe(res => {
      this.events.push(`Value emitted: ${res}`)
    })
  }
}
