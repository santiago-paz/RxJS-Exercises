import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgBestPracticesComponent } from './ag-best-practices/ag-best-practices.component';
import { BasechildComponent } from './ag-best-practices/exercises/childs/basechild/basechild.component';
import { ChildOneComponent } from './ag-best-practices/exercises/childs/child-one/child-one.component';
import { ChildTwoComponent } from './ag-best-practices/exercises/childs/child-two/child-two.component';
import { CommunicationBetweenComponentsComponent } from './ag-best-practices/exercises/communication-between-components/communication-between-components.component';
import { ContainerPresentationPatternComponent } from './ag-best-practices/exercises/container-presentation-pattern/container-presentation-pattern.component';
import { EventBusComponent } from './ag-best-practices/exercises/event-bus/event-bus.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { NavigationComponent } from './navigation/navigation.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RxjsComponent,
    RxjsBasicsComponent,
    RxjsMapPipeFilterComponent,
    RxjsTapComponent,
    RxjsCatcherrorComponent,
    RxjsFlatmapComponent,
    ObserverAndObservableComponent,
    RxjsIntervalRaceComponent,
    RxjsTapDelayScanComponent,
    RxjsFibonacciComponent,
    RxjsMergemapComponent,
    RxjsSkipuntilSharereplayComponent,
    RxjsBehaviorsubjectComponent,
    EjercicioTecnicoComponent,
    AgBestPracticesComponent,
    ContainerPresentationPatternComponent,
    ExerciseComponent,
    CommunicationBetweenComponentsComponent,
    EventBusComponent,
    BasechildComponent,
    ChildOneComponent,
    ChildTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
