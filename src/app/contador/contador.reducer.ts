import { Action } from '@ngrx/store';
import { state } from '../models/state.model'
import * as CONTADOR from './contador.actions';
const estado = state; 
let c = CONTADOR;
export function dataReducer(state = estado, action : CONTADOR.actions){
    switch(action.type){
        case c.INCREMENTAR:
            state.contador = state.contador + 1;
            return state;
        case c.DECREMENTAR:
            state.contador = state.contador - 1;
            return state;
        case c.MULTIPLICAR:
            state.contador = state.contador * action.payload;
            return state;
        case c.DIVIDIR:
            state.contador = state.contador / action.payload;
            return state; 
        case c.RESET:
            state.contador = 0;
            return state;  
        case c.CAMBIARLABEL:
            state.labelContador = action.payload;
            return state;        
        
        default:
            return state;
    }

}