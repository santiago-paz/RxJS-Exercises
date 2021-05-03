import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCatcherrorComponent } from './rxjs-catcherror.component';

describe('RxjsCatcherrorComponent', () => {
  let component: RxjsCatcherrorComponent;
  let fixture: ComponentFixture<RxjsCatcherrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsCatcherrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsCatcherrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
