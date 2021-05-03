import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioTecnicoComponent } from './ejercicio-tecnico.component';

describe('EjercicioTecnicoComponent', () => {
  let component: EjercicioTecnicoComponent;
  let fixture: ComponentFixture<EjercicioTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioTecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
