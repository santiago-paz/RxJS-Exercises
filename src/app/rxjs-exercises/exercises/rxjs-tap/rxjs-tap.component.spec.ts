import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTapComponent } from './rxjs-tap.component';

describe('RxjsTapComponent', () => {
  let component: RxjsTapComponent;
  let fixture: ComponentFixture<RxjsTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsTapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
