import { Action } from "@ngrx/store";

export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';
export const MULTIPLICAR = '[Contador] Muliplicar';
export const DIVIDIR = '[Contador] Dividir';
export const RESET = '[Contador] Reset';
export const CAMBIARLABEL = '[Label] Cambio';

export class IncrementarAction implements Action{
    readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action{
    readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action{
    readonly type = MULTIPLICAR;
    constructor (public payload:number){ }
}

export class DividirAction implements Action{
    readonly type = DIVIDIR;
    constructor (public payload:number){ }
}

export class ResetAction implements Action{
    readonly type = RESET;
}

export class CambiarLabelAction implements Action{
    readonly type = CAMBIARLABEL;
    constructor (public payload:string){ }
}

export type actions = IncrementarAction |
                        DecrementarAction |
                        MultiplicarAction |
                        DividirAction |
                        ResetAction |
                        CambiarLabelAction;