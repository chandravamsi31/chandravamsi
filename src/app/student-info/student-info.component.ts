import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent {
  @Input('stuInfo') stuInfo: any;
  @Input('studentCount') count: any;

  
  rank(no: number) {
    
  }
}
