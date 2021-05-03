import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observer-and-observable',
  templateUrl: './observer-and-observable.component.html',
  styleUrls: ['./observer-and-observable.component.scss']
})
export class ObserverAndObservableComponent {

  events: Array<string> = [];

  myObserver: Observer<string> = {
    next: value => {
      this.events.push(`${value}`)
    },
    error: error => {
      this.events.push(`Error: ${error}`)
    },
    complete: () => {
      this.events.push(`Terminó`)
    },
  }

  myObservable: Observable<string> = new Observable(
    subscriber => {
      subscriber.next('Hola! Cómo estás?');
      subscriber.next('¿En qué puedo ayudarte hoy?');
      subscriber.next('Hola! Este es otro mensaje de prueba?');
      subscriber.error('Un error!');
      subscriber.complete();
    }
  );

  obsWithPipe = this.myObservable.pipe(
    map((v: string, i) => {
      return `Persona 1 dice: ${v}`
    }))

  obsWithPipe2 = this.myObservable.pipe(
    filter((v: string) => {
      return v.startsWith('Hola');
    })
  )

  onSubscribeButtonClick() {
   this.obsWithPipe.subscribe(this.myObserver)
   this.obsWithPipe2.subscribe(this.myObserver)
  }
}
