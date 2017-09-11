import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { DashBoardComponent } from './dashboard/dashboard.component';

import adminRoutes from './admin.routes';

@NgModule({
  imports: [
    adminRoutes
  ],
  declarations: [DashBoardComponent,UserComponent]
})
export class AdminModule { }
