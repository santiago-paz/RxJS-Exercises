import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSkipuntilSharereplayComponent } from './rxjs-skipuntil-sharereplay.component';

describe('RxjsSkipuntilSharereplayComponent', () => {
  let component: RxjsSkipuntilSharereplayComponent;
  let fixture: ComponentFixture<RxjsSkipuntilSharereplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsSkipuntilSharereplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSkipuntilSharereplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
