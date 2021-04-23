import { Component, OnInit } from '@angular/core';
import { ContactosComponent } from '../contactos';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { HomeComponent } from '../main';
import { PersonasComponent } from '../personas';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent implements OnInit {
  menu = [
    {texto: 'Contactos', componente: ContactosComponent },
    {texto: 'Personas', componente: PersonasComponent },
    {texto: 'Inicio', componente: HomeComponent },
    {texto: 'Demos', componente: DemosComponent },
    {texto: 'Formulario', componente: FormularioComponent },
  ];
  actual = this.menu[0].componente;

  constructor() { }

  seleccionar(indice: number) {
    this.actual = this.menu[indice].componente;
  }
  ngOnInit(): void {
  }

}
