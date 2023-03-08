import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent {
  @Input('stuInfo') stuInfo: any;
  @Input('studentCount') count: any;

  @Output() attendence = new EventEmitter();

  constructor(private global : GlobalService) {
    var first = 10;
    var sec = 20;
    var result = this.global.sumOf2No(first, sec);
    console.log("student", result);
  }

  attadence(no: number) {
    console.log(no);
    this.stuInfo.att = no;
    this.attendence.emit(this.stuInfo);
  }
}
