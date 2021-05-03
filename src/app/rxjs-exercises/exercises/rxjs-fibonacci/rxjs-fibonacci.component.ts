import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { max, scan } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-fibonacci',
  templateUrl: './rxjs-fibonacci.component.html',
  styleUrls: ['./rxjs-fibonacci.component.scss']
})
export class RxjsFibonacciComponent implements OnInit {

  events: Array<string> = [];

  fibonacciObs = interval(1000).pipe(
    scan(this.calculateNextFibonacciArray, [0, 1]),
  ).subscribe(
    v => {
      this.events.push(`${v}`);
    }
  )
  constructor() { }

  ngOnInit(): void {
  }

  calculateNextFibonacciArray(fibonacciArray: Array<number>): Array<number> {
    const fibonacciArrayLength = fibonacciArray.length;
    return [
      ...fibonacciArray,
      fibonacciArray[fibonacciArrayLength - 1] + fibonacciArray[fibonacciArrayLength - 2]
    ];
  }

}
