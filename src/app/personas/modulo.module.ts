import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/my-core';
import { CommonServicesModule } from '../common-services';
import { PERSONAS_COMPONENTES } from './componente.component';


@NgModule({
  declarations: [
    PERSONAS_COMPONENTES
  ],
  exports: [
    PERSONAS_COMPONENTES
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule,
  ]
})
export class PersonasModule { }
