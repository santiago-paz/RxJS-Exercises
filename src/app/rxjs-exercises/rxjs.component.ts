import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
  activeExercise: string = '';
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.firstChild?.url.subscribe((child) => {
      this.activeExercise = child[0].path;
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.activeExercise = event.url.split("/")[2];
      }
    });
  }
}
