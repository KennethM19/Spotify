import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>()
  myObservable1$: BehaviorSubject<any> = new BehaviorSubject(' ')
  constructor() {
  setTimeout(()=> {
  this.myObservable1$.next(' ')
  },1000)
  setTimeout(()=> {
  this.myObservable1$.next(' ')
  },2000)
  setTimeout(()=> {
  this.myObservable1$.error(' ')
  },3500) 
  /* this.myObservable1$ = new Observable(
  (observer: Observer<any>) =>{
  observer.next(' ')
  setTimeout(() => {
  observer.complete()
  }, 1000)
  setTimeout(() => {
  observer.next(' ')
  }, 2500)
  setTimeout(() => {
  observer.error(' ')
  }, 3500)
  }
  ) */
  }
  }
