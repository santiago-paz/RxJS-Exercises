import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rxjs-flatmap',
  templateUrl: './rxjs-flatmap.component.html',
  styleUrls: ['./rxjs-flatmap.component.scss']
})
export class RxjsFlatmapComponent {

  events: Array<string> = [];

  constructor(private http: HttpClient) { }

  onGetDataButtonClick() {
    this.http.get(`${environment.jsonPlaceHolderURL}todos/1`).pipe(
      map((value: any, index) => {
        return value.id;
      }),
      switchMap((todoId: any, index) => {
        return this.http.get(`${environment.jsonPlaceHolderURL}posts/${todoId}`).pipe(
          map(post => {
            return { todoId, post };
          })
        );
      })
    ).subscribe((res: any) => {
      this.events.push(`{
        postId: ${res.todoId},
        todoId: ${JSON.stringify(res.post)},
      }`);
    });
  }
}
