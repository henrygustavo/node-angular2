import { Route, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

export const AccountnRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

export default RouterModule.forChild(AccountnRoutes);
