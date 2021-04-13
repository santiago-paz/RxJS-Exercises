import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMapPipeFilterComponent } from './rxjs-map-pipe-filter.component';

describe('RxjsMapPipeFilterComponent', () => {
  let component: RxjsMapPipeFilterComponent;
  let fixture: ComponentFixture<RxjsMapPipeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsMapPipeFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsMapPipeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
