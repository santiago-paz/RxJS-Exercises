import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsFibonacciComponent } from './rxjs-fibonacci.component';

describe('RxjsFibonacciComponent', () => {
  let component: RxjsFibonacciComponent;
  let fixture: ComponentFixture<RxjsFibonacciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsFibonacciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsFibonacciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
