import { Component, OnInit } from "@angular/core";
import "./assets/css/app.css";

import { ApiService } from "./shared/api.service";

@Component({
    selector: "app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    constructor( private _apiService: ApiService) {

        console.log("AppComponent -> constructor");
    }

    ngOnInit() {
        console.log("AppComponent -> ngOnInit");

        this._apiService.listItems().subscribe(

            data => { console.log(data); },
            error => { console.log("error");}
           
        );
    }
}