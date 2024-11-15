import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PruebaService } from '../../servicios/prueba/prueba.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  formularioForm;
  resultado: string = "";

  constructor(private formBuilder: FormBuilder, private pruebaSrv: PruebaService) {
    this.formularioForm = this.formBuilder.group({
      nota1: '',
      nota2: ''
    });
  }

  ngOnInit() {
    console.log("Componente cargado");
  }

  calcularPromedio() {
    const { nota1, nota2 } = this.formularioForm.value;

    const nota1Number = Number(nota1);
    const nota2Number = Number(nota2);

    if (isNaN(nota1Number) || isNaN(nota2Number)) {
      this.resultado = "Por favor, ingrese notas válidas.";
      return;
    }

    const { promedio, estado } = this.pruebaSrv.calcularPromedioYEstado(nota1Number, nota2Number);
    this.resultado = `Promedio: ${promedio} - Estado: ${estado}`;
    this.formularioForm.reset();
  }
}
