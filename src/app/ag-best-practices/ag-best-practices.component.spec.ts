import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgBestPracticesComponent } from './ag-best-practices.component';

describe('AgBestPracticesComponent', () => {
  let component: AgBestPracticesComponent;
  let fixture: ComponentFixture<AgBestPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgBestPracticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgBestPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
