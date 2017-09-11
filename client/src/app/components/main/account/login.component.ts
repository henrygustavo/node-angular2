import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

     constructor() {

        console.log("LoginComponent -> constructor");
    }

    ngOnInit() {
        console.log("LoginComponent -> ngOnInit");

    }
}