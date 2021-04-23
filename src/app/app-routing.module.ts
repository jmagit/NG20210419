import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosAddComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contactos';
import { DemosComponent } from './demos/demos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './main';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'esto/es/una/demo', component: DemosComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'contacto', component: ContactosListComponent },
  { path: 'contacto/add', component: ContactosAddComponent },
  { path: 'contacto/:id/edit', component: ContactosEditComponent },
  { path: 'contacto/:id', component: ContactosViewComponent },
  { path: 'contacto/:id/:kk', component: ContactosViewComponent },
  { path: 'personas', children: [
    { path: '', pathMatch: 'full', component: ContactosListComponent },
    { path: 'add', component: ContactosAddComponent },
    { path: ':id/edit', component: ContactosEditComponent },
    { path: ':id', component: ContactosViewComponent },
    { path: ':id/:kk', component: ContactosViewComponent },
  ]},
  { path: 'beale/knibb', redirectTo: 'contacto/2' },
  { path: 'config', loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule)},
  { path: '404.html', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
