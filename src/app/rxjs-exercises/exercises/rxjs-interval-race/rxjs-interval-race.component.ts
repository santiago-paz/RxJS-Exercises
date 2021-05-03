import { Component, OnInit } from '@angular/core';
import { interval, Observable, race, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-interval-race',
  templateUrl: './rxjs-interval-race.component.html',
  styleUrls: ['./rxjs-interval-race.component.scss']
})
export class RxjsIntervalRaceComponent implements OnInit {

  car_1: Observable<string> = interval(1000).pipe(mapTo('Carro 1'));
  car_2: Observable<string> = interval(2000).pipe(mapTo('Carro 2'));
  events: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    race([this.car_1, this.car_2]).subscribe(
      v => {
        this.events.push(`El más rapido es ${v}`);
      }
    )
    this.car_2.subscribe(v => {
      this.events.push(`${v}`);
    })
  }

}
