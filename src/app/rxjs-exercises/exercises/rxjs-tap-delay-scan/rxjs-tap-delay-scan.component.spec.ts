import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTapDelayScanComponent } from './rxjs-tap-delay-scan.component';

describe('RxjsTapDelayScanComponent', () => {
  let component: RxjsTapDelayScanComponent;
  let fixture: ComponentFixture<RxjsTapDelayScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsTapDelayScanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsTapDelayScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
