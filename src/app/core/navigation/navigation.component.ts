import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  exerciseTypes: Array<string> = [];
  typeSelected: string = 'angular-best-practices';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router) {
  }

  ngOnInit(): void {
    /* this.exerciseTypes = this.loadExerciseTypesList();
    this.links = this.getChildRoutes(this.exerciseTypes[1]); */
  }

  loadExerciseTypesList(): Array<string> {
    const typesList: any = this.router.config[0].children?.map(
      v => { return v.path }
    );
    return typesList || [];
  }

  private getChildRoutes(parentUrl: string): Array<string> {
    const rxjsRoutes: any =
      this.router.config[0].children?.filter(v => { return v.path === parentUrl })[0];
    const links: Array<string> = [];

    rxjsRoutes.children.forEach((url: any) => {
      links.push(url.path);
    });
    return links;
  }

  onExerciseTypeChange(newType: string) {
    this.typeSelected = newType;
    this.links = this.getChildRoutes(newType);;
  }

}
