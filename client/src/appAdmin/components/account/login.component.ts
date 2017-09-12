import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    private loginForm: FormGroup;
    private displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    private isRedirected = true;

     constructor(private fb: FormBuilder) {

        console.log("LoginComponent -> constructor");
    }

    ngOnInit() {
        console.log("LoginComponent -> ngOnInit");
        
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), Validators.minLength(4)]],
            password: ['', [Validators.required, Validators.minLength(6)]]

        });

    }

    signUp(): void {

    }

}