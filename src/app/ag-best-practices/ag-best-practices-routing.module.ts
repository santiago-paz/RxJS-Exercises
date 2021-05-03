import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgBestPracticesComponent } from './ag-best-practices.component';
import { CommunicationBetweenComponentsComponent } from './exercises/communication-between-components/communication-between-components.component';
import { ContainerPresentationPatternComponent } from './exercises/container-presentation-pattern/container-presentation-pattern.component';
import { EventBusComponent } from './exercises/event-bus/event-bus.component';
import { ObservableServiceCommunicationComponent } from './exercises/observable-service-communication/observable-service-communication.component';

const routes: Routes = [
  {
    path: '',
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
      {
        path: 'observable-service',
        component: ObservableServiceCommunicationComponent
      },
      {
        path: '**',
        redirectTo: 'presentation-container-pattern'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgBestPracticesRoutingModule {
  static routingComponents = [
    AgBestPracticesComponent,
    ContainerPresentationPatternComponent,
    CommunicationBetweenComponentsComponent,
    EventBusComponent,
    ObservableServiceCommunicationComponent
  ]
}
