import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material/material.module';
import { AgBestPracticesRoutingModule } from './ag-best-practices-routing.module';
import { BasechildComponent } from './exercises/childs/basechild/basechild.component';
import { ChildOneComponent } from './exercises/childs/child-one/child-one.component';
import { ChildTwoComponent } from './exercises/childs/child-two/child-two.component';

@NgModule({
  declarations: [
    AgBestPracticesRoutingModule.routingComponents,
    BasechildComponent,
    ChildOneComponent,
    ChildTwoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AgBestPracticesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class AgBestPracticesModule { }
