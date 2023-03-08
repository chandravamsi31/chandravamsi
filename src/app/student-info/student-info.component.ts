import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent {
  @Input('stuInfo') stuInfo: any;
  @Input('studentCount') count: any;

  @Output() attendence = new EventEmitter();

  attadence(no: number) {
    console.log(no);
    this.stuInfo.att = no;
    this.attendence.emit(this.stuInfo);
  }
}
