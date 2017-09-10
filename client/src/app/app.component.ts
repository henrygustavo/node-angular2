import {Component, OnInit} from "@angular/core";
import "./assets/css/app.css";

import {ApiService} from "./shared/api.service";
import {Item} from "./model/Item";

@Component({selector: "app", templateUrl: "./app.component.html"})
export class AppComponent implements OnInit {

    public items: Item[];

    constructor(private _apiService : ApiService) {

        console.log("AppComponent -> constructor");
    }

    ngOnInit() {
        console.log("AppComponent -> ngOnInit");

        this
            ._apiService.listItems().subscribe(
                data => {
                this.items = data;
            }, error => {
                console.log("error");
            });
    }
}