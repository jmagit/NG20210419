import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonasViewModelService } from './servicios.service';

@Component({
  selector: 'app-componente',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonasComponent implements OnInit {
  constructor(protected vm: PersonasViewModelService) { }
  public get VM(): PersonasViewModelService { return this.vm; }
  ngOnInit(): void {
    this.vm.list();
  }
}
@Component({
  selector: 'app-personas-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonasListComponent implements OnInit {
  constructor(protected vm: PersonasViewModelService) { }
  public get VM(): PersonasViewModelService { return this.vm; }
  ngOnInit(): void { }
}
@Component({
  selector: 'app-personas-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonasAddComponent implements OnInit {
  constructor(protected vm: PersonasViewModelService) { }
  public get VM(): PersonasViewModelService { return this.vm; }
  ngOnInit(): void { }
}
@Component({
  selector: 'app-personas-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonasEditComponent implements OnInit, OnDestroy {
  constructor(protected vm: PersonasViewModelService) { }
  public get VM(): PersonasViewModelService { return this.vm; }
  ngOnInit(): void { }
  ngOnDestroy(): void { }
 }
@Component({
  selector: 'app-personas-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonasViewComponent implements OnInit, OnDestroy {
  constructor(protected vm: PersonasViewModelService) { }
  public get VM(): PersonasViewModelService { return this.vm; }
  ngOnInit(): void { }
  ngOnDestroy(): void { }
 }

 export const PERSONAS_COMPONENTES = [
  PersonasComponent, PersonasListComponent, PersonasAddComponent,
  PersonasEditComponent, PersonasViewComponent,
];
