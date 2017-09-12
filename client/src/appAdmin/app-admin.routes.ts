import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'admin', loadChildren: './components/admin/admin.module#AdminModule' },
    { path: '', loadChildren: './components/account/account.module#AcountModule' }
];

export default RouterModule.forRoot(routes, { useHash: true });