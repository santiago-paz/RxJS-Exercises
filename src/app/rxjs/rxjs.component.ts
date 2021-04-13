import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  activeExercise: string = '';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.firstChild?.url.subscribe(child => {
      this.activeExercise = child[0].path;
    });
    this.activatedRoute.url.subscribe(res => {
      console.log(res);
      res.forEach(dad => {
        console.log(dad);
      });
    })
  }
}
