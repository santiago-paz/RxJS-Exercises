import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  links: string[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router) {
  }

  ngOnInit(): void {
    const rxjsRoutes: any = this.router.config[0];
    rxjsRoutes.children[0].children.forEach((url: any) => {
      this.links.push(url.path);
    })
  }

}
