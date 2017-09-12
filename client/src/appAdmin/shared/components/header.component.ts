import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MenuItem } from '../../models/menu-item';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

    private menuItems: MenuItem[];
    private selectedMenuItem: string;
    private subscription: Subscription;

    constructor() {


    }

    ngOnInit() {
    
        this.menuItems = [ new MenuItem('fa-home', 'dashboard', 'dashboard', 'DashBoard', 'AUTHORIZED'),
                            new MenuItem('fa-edit', 'users', 'users', 'Users', 'AUTHORIZED')
                        ] ;
    }

    logOut() {

        
    }

    ngOnDestroy() {
        
    }
}