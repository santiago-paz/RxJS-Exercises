import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableServiceCommunicationComponent } from './observable-service-communication.component';

describe('ObservableServiceCommunicationComponent', () => {
  let component: ObservableServiceCommunicationComponent;
  let fixture: ComponentFixture<ObservableServiceCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableServiceCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableServiceCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
