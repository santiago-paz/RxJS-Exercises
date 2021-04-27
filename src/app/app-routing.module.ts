import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgBestPracticesComponent } from './ag-best-practices/ag-best-practices.component';
import { CommunicationBetweenComponentsComponent } from './ag-best-practices/exercises/communication-between-components/communication-between-components.component';
import { ContainerPresentationPatternComponent } from './ag-best-practices/exercises/container-presentation-pattern/container-presentation-pattern.component';
import { EventBusComponent } from './ag-best-practices/exercises/event-bus/event-bus.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { EjercicioTecnicoComponent } from './rxjs/exercises/ejercicio-tecnico/ejercicio-tecnico.component';
import { ObserverAndObservableComponent } from './rxjs/exercises/observer-and-observable/observer-and-observable.component';
import { RxjsBasicsComponent } from './rxjs/exercises/rxjs-basics/rxjs-basics.component';
import { RxjsBehaviorsubjectComponent } from './rxjs/exercises/rxjs-behaviorsubject/rxjs-behaviorsubject.component';
import { RxjsCatcherrorComponent } from './rxjs/exercises/rxjs-catcherror/rxjs-catcherror.component';
import { RxjsFibonacciComponent } from './rxjs/exercises/rxjs-fibonacci/rxjs-fibonacci.component';
import { RxjsFlatmapComponent } from './rxjs/exercises/rxjs-flatmap/rxjs-flatmap.component';
import { RxjsIntervalRaceComponent } from './rxjs/exercises/rxjs-interval-race/rxjs-interval-race.component';
import { RxjsMapPipeFilterComponent } from './rxjs/exercises/rxjs-map-pipe-filter/rxjs-map-pipe-filter.component';
import { RxjsMergemapComponent } from './rxjs/exercises/rxjs-mergemap/rxjs-mergemap.component';
import { RxjsSkipuntilSharereplayComponent } from './rxjs/exercises/rxjs-skipuntil-sharereplay/rxjs-skipuntil-sharereplay.component';
import { RxjsTapDelayScanComponent } from './rxjs/exercises/rxjs-tap-delay-scan/rxjs-tap-delay-scan.component';
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
          {
            path: 'observer-and-observable',
            component: ObserverAndObservableComponent
          },
          {
            path: 'interval-race',
            component: RxjsIntervalRaceComponent
          },
          {
            path: 'tap-delay-scan',
            component: RxjsTapDelayScanComponent
          },
          {
            path: 'fibonacci',
            component: RxjsFibonacciComponent
          },
          {
            path: 'mergemap',
            component: RxjsMergemapComponent
          },
          {
            path: 'skipuntil-sharereplay',
            component: RxjsSkipuntilSharereplayComponent
          },
          {
            path: 'behaviorsubject',
            component: RxjsBehaviorsubjectComponent
          },
          {
            path: 'ejercicio-tecnico',
            component: EjercicioTecnicoComponent
          },
        ]
      },
      {
        path: 'angular-best-practices',
        component: AgBestPracticesComponent,
        children: [
          {
            path: 'presentation-container-pattern',
            component: ContainerPresentationPatternComponent
          },
          {
            path: 'communication-between-components',
            component: CommunicationBetweenComponentsComponent
          },
          {
            path: 'event-bus',
            component: EventBusComponent
          },
        ]
      }
    ],
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
