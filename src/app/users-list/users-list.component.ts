import { Component } from '@angular/core';
export interface userStructure {
  id: number;
  name: string;
  age?: any;
}
@Component({  
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  newUser: any = "10";
  userPwd: any = "";
  listOfStudent: userStructure[] = [
    {
      "name": "sasi",
      "id": 18,
      "age": 70

    },
    {
      "id": 19,
      "name": "CV",
      "age": 50
    },
    {
      "id": 20,
      "name": "Pavani",
      "age": "23" 
    },
    {
      "id": 21,
      "name": "Malleswari",
      "age": 100
    },
    {
      "id": 22,
      "name": "Jyothi"
    },
    {
      "id": 23,
      "name": "Sai",
      "age": 110
    }
  ];

  constructor() {
    console.log(this.listOfStudent);
  }

  addUser() {
    // this.listOfStudent.push(this.newUser);
  }
}
