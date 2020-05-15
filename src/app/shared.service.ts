import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }


  onLoginEvent: EventEmitter<any> = new EventEmitter();
  
  onLogoutEvent: EventEmitter<any> = new EventEmitter();

  coinEvent: EventEmitter<any>=new EventEmitter();

  // change() {
  //   console.log('change started'); 
  //    this.onMainEvent.emit(true);
  //  }

  //  getEmittedValue() {
  //   return this.onMainEvent;
  // } 
}
