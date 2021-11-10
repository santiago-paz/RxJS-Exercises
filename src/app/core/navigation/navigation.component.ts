import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import appRoutes from 'src/app/app-routes.json';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  links: string[] = [];
  exerciseTypes: Array<string> = [];
  typeSelected: string = 'rxjs';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.exerciseTypes = this.getExerciseTypesList();
    this.links = this.getChildRoutes(this.exerciseTypes[1]);
  }

  getExerciseTypesList(): Array<string> {
    const typesList: Array<string> = appRoutes.map((route) => route.path);

    return typesList || [];
  }

  private getChildRoutes(parentUrl: string): Array<string> {
    const rxjsRoutes: any = appRoutes.filter(
      (route) => route.path === parentUrl
    )[0];
    const links: Array<string> = rxjsRoutes.children.map(
      (route: any) => route.path
    );

    return links;
  }

  onExerciseTypeChange(newType: string) {
    this.typeSelected = newType;
    this.links = this.getChildRoutes(newType);
  }
}
