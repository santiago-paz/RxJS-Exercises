import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioTecnicoComponent } from './exercises/ejercicio-tecnico/ejercicio-tecnico.component';
import { ObserverAndObservableComponent } from './exercises/observer-and-observable/observer-and-observable.component';
import { RxjsBasicsComponent } from './exercises/rxjs-basics/rxjs-basics.component';
import { RxjsBehaviorsubjectComponent } from './exercises/rxjs-behaviorsubject/rxjs-behaviorsubject.component';
import { RxjsCatcherrorComponent } from './exercises/rxjs-catcherror/rxjs-catcherror.component';
import { RxjsFibonacciComponent } from './exercises/rxjs-fibonacci/rxjs-fibonacci.component';
import { RxjsFlatmapComponent } from './exercises/rxjs-flatmap/rxjs-flatmap.component';
import { RxjsIntervalRaceComponent } from './exercises/rxjs-interval-race/rxjs-interval-race.component';
import { RxjsMapPipeFilterComponent } from './exercises/rxjs-map-pipe-filter/rxjs-map-pipe-filter.component';
import { RxjsMergemapComponent } from './exercises/rxjs-mergemap/rxjs-mergemap.component';
import { RxjsSkipuntilSharereplayComponent } from './exercises/rxjs-skipuntil-sharereplay/rxjs-skipuntil-sharereplay.component';
import { RxjsTapDelayScanComponent } from './exercises/rxjs-tap-delay-scan/rxjs-tap-delay-scan.component';
import { RxjsTapComponent } from './exercises/rxjs-tap/rxjs-tap.component';
import { RxjsComponent } from './rxjs.component';

const routes: Routes = [
  {
    path: '',
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
      {
        path: '**',
        redirectTo: 'basics'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsExercisesRoutingModule {

  static routingComponents = [
    RxjsComponent,
    RxjsMapPipeFilterComponent,
    RxjsTapComponent,
    RxjsCatcherrorComponent,
    RxjsFlatmapComponent,
    ObserverAndObservableComponent,
    RxjsIntervalRaceComponent,
    RxjsTapDelayScanComponent,
    RxjsFibonacciComponent,
    RxjsBasicsComponent,
    RxjsMergemapComponent,
    RxjsSkipuntilSharereplayComponent,
    RxjsBehaviorsubjectComponent,
    EjercicioTecnicoComponent
  ]
}
