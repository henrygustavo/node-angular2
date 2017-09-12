import {Component, OnInit} from "@angular/core";
import "./assets/css/app-admin.css";

@Component({
        selector: "app-admin", 
        templateUrl: "./app-admin.component.html"
})

export class AppAdminComponent implements OnInit {

    constructor() {
        console.log("AppAdminComponent -> constructor");
    }

    ngOnInit() {
       
        console.log("AppAdminComponent -> ngOnInit");
    }
}