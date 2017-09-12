import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

import accountRoutes from './account.routes';

@NgModule({
  imports: [
    accountRoutes
  ],
  declarations: [LoginComponent]
})
export class AcountModule { }
