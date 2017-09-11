import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ApiService } from  './shared/api.service';

import appRoutes from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        appRoutes
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    providers: [
        ApiService
    ]
})
export class AppModule { }