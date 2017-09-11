import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-component',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

     constructor() {

        console.log("UserComponent -> constructor");
    }

    ngOnInit() {
        console.log("UserComponent -> ngOnInit");

    }
}