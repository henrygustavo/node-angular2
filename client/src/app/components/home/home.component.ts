import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {Item} from "../../model/Item";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public items: Item[];

     constructor(private _apiService : ApiService) {

        console.log("HomeComponent -> constructor");
    }

    ngOnInit() {
        console.log("HomeComponent -> ngOnInit");

        this
            ._apiService.listItems().subscribe(
                data => {
                this.items = data;
            }, error => {
                console.log("error");
            });
    }
}