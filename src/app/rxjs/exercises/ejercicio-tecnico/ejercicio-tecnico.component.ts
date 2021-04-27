import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-tecnico',
  templateUrl: './ejercicio-tecnico.component.html',
  styleUrls: ['./ejercicio-tecnico.component.scss']
})
export class EjercicioTecnicoComponent implements OnInit {
  selectedCircle: number = 0;
  previousSelectedCircle: number = 0;
  circles = 4;
  
  constructor() { }

  

  ngOnInit(): void {
  }

  selectCircle(event: number) {
    this.previousSelectedCircle = this.selectedCircle;
    this.selectedCircle = event;
  }

}
