import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login.component';
import mainRoutes from './main.routes';

@NgModule({
  imports: [
    mainRoutes
  ],
  declarations: [HomeComponent,LoginComponent]
})
export class MainModule { }
