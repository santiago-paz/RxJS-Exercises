import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsIntervalRaceComponent } from './rxjs-interval-race.component';

describe('RxjsIntervalRaceComponent', () => {
  let component: RxjsIntervalRaceComponent;
  let fixture: ComponentFixture<RxjsIntervalRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsIntervalRaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsIntervalRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
