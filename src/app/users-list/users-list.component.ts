import { Component } from '@angular/core';
export interface userStructure {
  id: number;
  name: string;
  age?: any;
  phoneNo?: number;
  mailID?: string;
}
@Component({  
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  newUser: any = "";
  userPwd: any = "";
  selectedStudentForEdit: any;
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
      "age": "23",
      "phoneNo": 891891891
    },
    {
      "id": 21,
      "name": "Malleswari",
      "age": 100,
      "mailID": "malleswari@mail.com"
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

  selectStudent: any;

  addUser() {
    let newStuID = ++{...this.listOfStudent[this.listOfStudent.length - 1]}.id;
    let newStu = {
      id: newStuID,
      name: this.newUser
    }
    this.listOfStudent.push(newStu);
  }

  editStudent() {

  }

  selectStu(selectedStu: any) {
    console.log(selectedStu);
    this.selectedStudentForEdit = selectedStu;
  }

  detailStuInfo(student: any) {
    this.selectStudent = student;
  }
}
