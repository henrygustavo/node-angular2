import {Component, OnInit} from "@angular/core";
import { Router, NavigationStart } from '@angular/router';

import "./assets/css/app-admin.css";
import "./assets/css/theme.css";
import "./assets/css/metisMenu.css";
import "font-awesome/css/font-awesome.css";

@Component({
        selector: "app-admin", 
        templateUrl: "./app-admin.component.html"
})

export class AppAdminComponent implements OnInit {

    private isAuthenticated: boolean;

    constructor(private _router: Router) {
        
        console.log("AppAdminComponent -> constructor");
    }

    ngOnInit() {
        
        this._router.events.subscribe((navigationStart:any) => {

             this.isAuthenticated = navigationStart.url !=="/login" && navigationStart.url !=="/";
        }
    );
       
        console.log("AppAdminComponent -> ngOnInit");
    }
}