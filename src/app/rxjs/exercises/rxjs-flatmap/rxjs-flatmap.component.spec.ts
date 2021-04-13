import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsFlatmapComponent } from './rxjs-flatmap.component';

describe('RxjsFlatmapComponent', () => {
  let component: RxjsFlatmapComponent;
  let fixture: ComponentFixture<RxjsFlatmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsFlatmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsFlatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
