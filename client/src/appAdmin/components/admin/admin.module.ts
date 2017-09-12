import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user/user.component';
import { DashBoardComponent } from './dashboard/dashboard.component';

import adminRoutes from './admin.routes';

@NgModule({
  imports: [
    CommonModule,
    adminRoutes
  ],
  declarations: [DashBoardComponent,UserComponent]
})
export class AdminModule { }
