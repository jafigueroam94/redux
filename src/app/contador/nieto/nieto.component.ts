import { Component, OnInit } from '@angular/core';
import { AppState } from '../../interfaces/appState.interface';
import { Store } from '@ngrx/store';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit, AppState {
  labelContador: string;
  stored: any;
  contador: number;

  constructor(private store : Store<AppState>) { 
    this.store.subscribe(state => {
      this.stored = state.stored;
    });
  }

  ngOnInit() {
  }

  reset(){
    const accion = new ResetAction();
    this.store.dispatch(accion);
  }
}
