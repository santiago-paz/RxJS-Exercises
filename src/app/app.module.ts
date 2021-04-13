import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ExerciseComponent } from './exercise/exercise.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RxjsBasicsComponent } from './rxjs/exercises/rxjs-basics/rxjs-basics.component';
import { MatCardModule } from '@angular/material/card';
import { RxjsMapPipeFilterComponent } from './rxjs/exercises/rxjs-map-pipe-filter/rxjs-map-pipe-filter.component';
import { RxjsTapComponent } from './rxjs/exercises/rxjs-tap/rxjs-tap.component';
import { RxjsCatcherrorComponent } from './rxjs/exercises/rxjs-catcherror/rxjs-catcherror.component';
import { HttpClientModule } from '@angular/common/http';
import { RxjsFlatmapComponent } from './rxjs/exercises/rxjs-flatmap/rxjs-flatmap.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ExerciseComponent,
    RxjsComponent,
    RxjsBasicsComponent,
    RxjsMapPipeFilterComponent,
    RxjsTapComponent,
    RxjsCatcherrorComponent,
    RxjsFlatmapComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
