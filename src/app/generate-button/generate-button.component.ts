import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'GenerateButton',
    templateUrl: './generate-button.component.html',
    styleUrls: ['./generate-button.component.less']
})

export class GenerateButtonComponent implements OnInit {

    public isLoading = false;

    constructor() { }

    ngOnInit() {
        console.log('GenerateButtonComponent');
    }

    public onClick() {
        console.log('onClick');

        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
        }, 1300);
    }
}
