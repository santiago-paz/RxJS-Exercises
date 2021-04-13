import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-catcherror',
  templateUrl: './rxjs-catcherror.component.html',
  styleUrls: ['./rxjs-catcherror.component.scss']
})
export class RxjsCatcherrorComponent implements OnInit {

  errors: Array<any> = [];
  showFull: boolean = false;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://www.example.com/notfound.jpg')
      .pipe(
        catchError((err, caught) => {
          this.errors.push(err);
          return of();
        })
      ).subscribe(res => {
        // This block never happens.
      })
  }
}
