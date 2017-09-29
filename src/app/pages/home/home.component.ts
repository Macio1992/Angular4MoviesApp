import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

    title: string = 'Hello from the Hello Component!';

    ngOnInit(): void {
        console.log(this.title);
    }
}