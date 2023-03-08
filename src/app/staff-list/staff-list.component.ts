import { Component } from '@angular/core';
import { GlobalService } from '../global.service'

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent {
  constructor(private global: GlobalService) {
    var first = 10;
    var sec = 20;
    var result = this.global.sumOf2No(first, sec);
    console.log("staff", result);
  }
}
