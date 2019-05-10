import { Component, OnInit } from '@angular/core';
import { AppState } from '../../interfaces/appState.interface'
import { Store, Action } from '@ngrx/store';
import { MultiplicarAction, DividirAction } from '../contador.actions';
@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit, AppState {
  labelContador: string;
  stored: any;
  contador:number;
  constructor(private store : Store<AppState>) { 
    this.store.subscribe(state => {
      this.stored = state.stored;
    });
  }

  ngOnInit() {
  }

  dividir(){
    const accion = new DividirAction(5);
    this.store.dispatch(accion);
  }

  multiplicar(){
    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);
  }

}
