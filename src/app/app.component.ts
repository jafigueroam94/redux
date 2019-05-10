import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './interfaces/appState.interface';
import { IncrementarAction, DecrementarAction, CambiarLabelAction } from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AppState{
  title = 'redux';
  labelContador: string;
  contador:number;
  stored:any;

  constructor(private store : Store<AppState>){
    this.store.subscribe(state => {
      this.stored = state.stored;
      this.contador = this.stored.contador;
      this.labelContador = this.stored.labelContador;
    });
  }

  decrementar(){
    const accion = new DecrementarAction();
    this.store.dispatch(accion);
  }
  
  incrementar(){
    const accion = new IncrementarAction();
    this.store.dispatch(accion);
  }

  cambiarLabel(){
    const accion = new CambiarLabelAction('Y ahora es : ');
    this.store.dispatch(accion);
  }
}
