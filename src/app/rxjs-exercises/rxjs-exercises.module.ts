import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../core/material/material.module';
import { RxjsExercisesRoutingModule } from './rxjs-exercises-routing.module';

@NgModule({
  declarations: [
    RxjsExercisesRoutingModule.routingComponents
  ],
  imports: [
    CommonModule,
    RxjsExercisesRoutingModule,
    MaterialModule
  ],
})
export class RxjsExercisesModule { }
