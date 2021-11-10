import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ]
})
export class CoreModule { }
