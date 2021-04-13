import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseComponent } from './exercise/exercise.component';
import { RxjsBasicsComponent } from './rxjs/exercises/rxjs-basics/rxjs-basics.component';
import { RxjsCatcherrorComponent } from './rxjs/exercises/rxjs-catcherror/rxjs-catcherror.component';
import { RxjsFlatmapComponent } from './rxjs/exercises/rxjs-flatmap/rxjs-flatmap.component';
import { RxjsMapPipeFilterComponent } from './rxjs/exercises/rxjs-map-pipe-filter/rxjs-map-pipe-filter.component';
import { RxjsTapComponent } from './rxjs/exercises/rxjs-tap/rxjs-tap.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'ejercicios',
    component: ExerciseComponent,
    children: [
      {
        path: 'rxjs',
        component: RxjsComponent,
        children: [
          {
            path: 'basics',
            component: RxjsBasicsComponent
          },
          {
            path: 'map-pipe-filter',
            component: RxjsMapPipeFilterComponent
          },
          {
            path: 'tap',
            component: RxjsTapComponent
          },
          {
            path: 'catcherror',
            component: RxjsCatcherrorComponent
          },
          {
            path: 'flatmap',
            component: RxjsFlatmapComponent
          },
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'ejercicios/rxjs/basics'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
