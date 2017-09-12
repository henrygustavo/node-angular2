import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import accountRoutes from './account.routes';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    accountRoutes
  ],
  declarations: [LoginComponent]
})
export class AcountModule { }
