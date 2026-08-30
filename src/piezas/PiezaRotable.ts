import { PiezaBase } from "./PiezaBase.ts";

export class PiezaRotable extends PiezaBase {
  public constructor(nombre: string, forma: number[][]) {
    super(nombre, forma);
  }

  rotarIzq(): void {
    const filas = this.forma.length;
    const columnas = this.forma[0].length;

    const matrizRotada: number[][] = Array.from(
        { length: columnas },
        () => Array(filas).fill(0)
    );

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            matrizRotada[columnas - 1 - j][i] = this.forma[i][j];
        }
    }

    this.forma = matrizRotada;
}

rotarDer(): void {
    const filas = this.forma.length;
    const columnas = this.forma [0].length;

    const matrizRotada: number[][] = Array.from(
        { length: columnas },
        () => Array(filas).fill(0)
    );

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            matrizRotada[j][filas - 1 - i] = this.forma[i][j];
        }
    }

    this.forma = matrizRotada;
}
}
 