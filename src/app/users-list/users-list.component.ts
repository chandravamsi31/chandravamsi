import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { HttpClient } from '@angular/common/http';

export interface userStructure {
  id: number;
  name: string;
  age?: any;
  phoneNo?: number;
  mailID?: string;
  att?: any;
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
      "age": 70,
      "att": "not yet"
    },
    {
      "id": 19,
      "name": "CV",
      "age": 50,
      "att": "not yet"
    },
    {
      "id": 20,
      "name": "Pavani",
      "age": "23",
      "phoneNo": 891891891,
      "att": "not yet"
    },
    {
      "id": 21,
      "name": "Malleswari",
      "age": 100,
      "mailID": "malleswari@mail.com",
      "att": "not yet"
    },
    {
      "id": 22,
      "name": "Jyothi",
      "att": "not yet"
    },
    {
      "id": 23,
      "name": "Sai",
      "age": 110,
      "att": "not yet"
    }
  ];

  userList: any;

  selectStudent: any;

  constructor(public global: GlobalService, private http: HttpClient) {

  }

  ngOnInit() {
    var first = 1478490;
    var sec = 3465847;
    var result = this.global.sumOf2No(first, sec);
    console.log("student", result);

    this.global.getUserData().subscribe((obj : any) => {
      console.log(this.userList);
      this.userList = obj.data;
      console.log(obj);
      console.log(this.userList);
    });
  }

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

  setAttandence(data: any) {
    console.log(data);
  }
}
