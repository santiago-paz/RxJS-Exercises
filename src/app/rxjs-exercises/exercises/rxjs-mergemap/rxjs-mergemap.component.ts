import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rxjs-mergemap',
  templateUrl: './rxjs-mergemap.component.html',
  styleUrls: ['./rxjs-mergemap.component.scss']
})
export class RxjsMergemapComponent implements OnInit {

  events: Array<string> = [];

  constructor(private http: HttpClient) { }

  myObs = interval(1000).pipe(
    map(v => { return v + 1 }),
    mergeMap(v => {
      return this.http.get(`${environment.jsonPlaceHolderURL}todos/${v}`);
    })
  ).subscribe((v: any) => {
    this.events.push(`${v.title}`);
  }, err => {
    this.events.push(`Error: ${err}`);
  });

  ngOnInit(): void {
  }

}
