import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationBetweenComponentsComponent } from './communication-between-components.component';

describe('CommunicationBetweenComponentsComponent', () => {
  let component: CommunicationBetweenComponentsComponent;
  let fixture: ComponentFixture<CommunicationBetweenComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationBetweenComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationBetweenComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
