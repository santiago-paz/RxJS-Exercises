import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPresentationPatternComponent } from './container-presentation-pattern.component';

describe('ContainerPresentationPatternComponent', () => {
  let component: ContainerPresentationPatternComponent;
  let fixture: ComponentFixture<ContainerPresentationPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerPresentationPatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPresentationPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
