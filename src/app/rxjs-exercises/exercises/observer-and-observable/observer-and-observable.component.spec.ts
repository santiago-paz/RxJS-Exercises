import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverAndObservableComponent } from './observer-and-observable.component';

describe('ObserverAndObservableComponent', () => {
  let component: ObserverAndObservableComponent;
  let fixture: ComponentFixture<ObserverAndObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObserverAndObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverAndObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
