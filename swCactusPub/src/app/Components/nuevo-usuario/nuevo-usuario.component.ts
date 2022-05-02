import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  img = 'https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg';
  constructor() { }
  hide = true;
  nombreFormControl  = new FormControl('', [Validators.required]);
  direccionFormControl = new FormControl('', [Validators.required]);
  perfilFormControl = new FormControl('', [Validators.required]);
  ListFormControl = new FormControl('', [Validators.required]);
  direcFormControl= new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  ListEstsFormControl = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.emailFormControl.hasError('required')) {
      return 'Ingrese un correo valido';
    }

    return this.emailFormControl.hasError('email') ? 'Correo No Valido' : '';
  }


  ngOnInit(): void {
  }

}
