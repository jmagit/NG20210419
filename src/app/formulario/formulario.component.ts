import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export abstract class RESTDAOService<T, K> {
  protected baseUrl = 'http://localhost:4321/api/';
  constructor(protected http: HttpClient, entidad: string, protected option = {}) {
    this.baseUrl += entidad;
  }
  query(): Observable<T> { return this.http.get<T>(this.baseUrl, this.option); }
  get(id: K): Observable<T> { return this.http.get<T>(this.baseUrl + '/' + id, this.option); }
  add(item: T): Observable<T> { return this.http.post<T>(this.baseUrl, item, this.option); }
  change(id: K, item: T): Observable<T> { return this.http.put<T>(this.baseUrl + '/' + id, item, this.option); }
  remove(id: K): Observable<T> { return this.http.delete<T>(this.baseUrl + '/' + id, this.option); }
}

@Injectable({providedIn: 'root'})
export class PersonasDAOService extends RESTDAOService<any, number> {
  constructor(srv: HttpClient) {
    super(srv, 'personas', { withCredentials: true });
  }

}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  elemento = {
    id: 1, nombre: 'Pepito', apellidos: 'Grillo', edad: 99
  };
  esNuevo = false;

  constructor(private dao: PersonasDAOService) { }

  ngOnInit(): void {
  }

  nuevo() {
    this.elemento = {
      id: null, nombre: null, apellidos: null, edad: null
    };
    this.esNuevo = true;
  }
  cargar() {
    this.dao.get(this.elemento.id)
      .subscribe(
        data => {
          this.elemento = data;
          this.esNuevo = false;
        },
        err => console.error('Error: ${error}')
      )
    // this.elemento = {
    //   id: 2, nombre: 'Carmelo', apellidos: 'Coton', edad: 17
    // };
    // this.esNuevo = false;
  }
  enviar() {
    alert(JSON.stringify(this.elemento));
  }
  cancelar() {
  }
}
