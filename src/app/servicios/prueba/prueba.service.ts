import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor() { }

  calcularPromedioYEstado(nota1: number, nota2: number) {
    const promedio = (nota1 + nota2) / 2;
    let estado = "";

    if (promedio < 4) {
      estado = "Reprobado";
    } else if (promedio === 4) {
      estado = "Aprobado con nota mínima";
    } else {
      estado = "Aprobado";
    }

    return { promedio, estado };
  }
}
