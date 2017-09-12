import { Route, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { DashBoardComponent } from './dashboard/dashboard.component';

export const AdminRoutes: Route[] = [
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'users', component: UserComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

export default RouterModule.forChild(AdminRoutes);
