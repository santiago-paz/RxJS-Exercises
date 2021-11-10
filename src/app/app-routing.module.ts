import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'best-practices',
    loadChildren: () =>
      import('./ag-best-practices/ag-best-practices.module').then(
        module => module.AgBestPracticesModule
      )
  },
  {
    path: 'rxjs',
    loadChildren: () =>
      import('./rxjs-exercises/rxjs-exercises.module').then(
        module => module.RxjsExercisesModule
      )
  },
  {
    path: '**',
    redirectTo: 'rxjs'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
