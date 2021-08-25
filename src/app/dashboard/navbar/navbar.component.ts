/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    display: string;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {}

    ngOnInit(): void {}
}
