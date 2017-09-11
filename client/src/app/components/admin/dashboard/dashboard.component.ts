import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html'
})
export class DashBoardComponent implements OnInit {

     constructor() {

        console.log("DashBoardComponent -> constructor");
    }

    ngOnInit() {
        console.log("DashBoardComponent -> ngOnInit");

    }
}