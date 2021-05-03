import { Component, OnInit } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { debounceTime, delay, filter, map, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-map-pipe-filter',
  templateUrl: './rxjs-map-pipe-filter.component.html',
  styleUrls: ['./rxjs-map-pipe-filter.component.scss']
})
export class RxjsMapPipeFilterComponent  {
  events: Array<string> = [];
  observable: Observable<any> = of(1, 2, 3, 4, 5, 6, 7, 8);
  
  onSubscribeButtonClick() {
    const pipeActions = pipe(
      map((v: number) => {
        return Math.pow(v, 2);
      }),
      filter((v: number) => {
        return (v % 2 === 0);
      }),
    );

    const s = pipeActions(this.observable);

    s.subscribe(res => {
      this.events.push(res.toString());
    })
  }

}
