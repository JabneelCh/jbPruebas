import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
img = 'https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg';
  idFormControl = new FormControl('', [Validators.required]);
  nombreFormControl = new FormControl('', [Validators.required]);
  codigoBFormControl = new FormControl('', [Validators.required]);
  empaqueFormControl = new FormControl('', [Validators.required]);
  cantEmpFormControl = new FormControl('', [Validators.required]);
  umFormControl = new FormControl('', [Validators.required]);
  presentFormControl = new FormControl('', [Validators.required]);
  costoFormControl = new FormControl('', [Validators.required]);
  costoUnitFormControl = new FormControl('', [Validators.required]);
  precioVtaFormControl = new FormControl('', [Validators.required]);
  precioVtaUnidFormControl = new FormControl('', [Validators.required]);
  provFormControl = new FormControl('', [Validators.required]);
  catFormControl = new FormControl('', [Validators.required]);
  sMinFormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }
  
}
