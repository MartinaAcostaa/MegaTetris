import { Clock } from "./Clock.ts";
import { Tablero } from "./Tablero.ts";

export type EstadoJuego =
  | "no_iniciado"
  | "jugando"
  | "finalizado";

export class Tetris {
  private _estado: EstadoJuego;
  private _tablero: Tablero;
  private _reloj: Clock;

  public constructor() {
    this._estado = "no_iniciado";
    this._tablero = new Tablero();
    this._reloj = new Clock();
  }

  public get estado(): EstadoJuego {
    return this._estado;
  }

  public get tablero(): Tablero {
    return this._tablero;
  }

  public get reloj(): Clock {
    return this._reloj;
  }

  public comenzar(): void {
    this._estado = "jugando";
  }
}