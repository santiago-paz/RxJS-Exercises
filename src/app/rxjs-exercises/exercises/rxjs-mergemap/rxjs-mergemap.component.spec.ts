import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMergemapComponent } from './rxjs-mergemap.component';

describe('RxjsMergemapComponent', () => {
  let component: RxjsMergemapComponent;
  let fixture: ComponentFixture<RxjsMergemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsMergemapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsMergemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
