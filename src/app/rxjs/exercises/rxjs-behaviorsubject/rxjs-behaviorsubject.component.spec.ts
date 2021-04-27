import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBehaviorsubjectComponent } from './rxjs-behaviorsubject.component';

describe('RxjsBehaviorsubjectComponent', () => {
  let component: RxjsBehaviorsubjectComponent;
  let fixture: ComponentFixture<RxjsBehaviorsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsBehaviorsubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsBehaviorsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
