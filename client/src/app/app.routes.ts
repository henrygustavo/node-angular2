import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: './components/main/main.module#MainModule' },
    { path: 'admin', loadChildren: './components/admin/admin.module#AdminModule' },
];

export default RouterModule.forRoot(routes, { useHash: true });