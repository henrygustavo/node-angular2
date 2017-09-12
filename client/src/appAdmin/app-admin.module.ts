import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppAdminComponent } from './app-admin.component';
import { HeaderComponent } from './shared/components/header.component';

import { ApiService } from  './shared/services/api.service';

import appRoutes from './app-admin.routes';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        appRoutes
    ],
    declarations: [
        AppAdminComponent,
        HeaderComponent
    ],
    bootstrap: [AppAdminComponent],
    providers: [
        ApiService
    ]
})
export class AppAdminModule { }