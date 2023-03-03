import { Component } from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  newUser: any = "";
  listOfUSers: any[] = [
    "Suma",
    "Jyo",
    "pavani",
    "CV",
    "sasi",
    "sai charan",
    "niranjan",
    "movayya",
    "sandeep",
    "yeswanth",
    "management",
    "bhargavi",
    "sai"
  ];

  addUser() {
    this.listOfUSers.unshift(this.newUser);
  }
}
