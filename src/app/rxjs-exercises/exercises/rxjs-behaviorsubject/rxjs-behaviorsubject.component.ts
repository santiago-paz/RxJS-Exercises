import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-rxjs-behaviorsubject',
  templateUrl: './rxjs-behaviorsubject.component.html',
  styleUrls: ['./rxjs-behaviorsubject.component.scss']
})
export class RxjsBehaviorsubjectComponent implements OnInit {

  events: Array<string> = [];
  myBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject('Hola!');
  myReplaySubject: ReplaySubject<string> = new ReplaySubject();

  constructor() { }

  ngOnInit(): void {
    this.myReplaySubject.next('Primer next en el replay!');

    this.myBehaviorSubject.subscribe(v => {
      this.events.push(`De la primera suscripción: ${v}`);
    });
    
    this.myBehaviorSubject.next('Último valor')
    this.myReplaySubject.next('Segundo next en el replay!');
    
    this.myBehaviorSubject.subscribe(v => {
      this.events.push(`De la segunda suscripción: ${v}`);
    })
    
    this.myReplaySubject.subscribe(v => {
      this.events.push(`Del replay subject: ${v}`);
    })

    this.myReplaySubject.next('tercer next en el replay!');
  }

}
