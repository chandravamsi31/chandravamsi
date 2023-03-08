import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Demo Project';
  showUSerList: boolean = false;

  constructor() {
    console.log("SWAG");
  }

  displayUSerList() {
    this.showUSerList = true;
  }
}

