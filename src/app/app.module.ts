import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { StaffListComponent } from './staff-list/staff-list.component';

import { appRoutes } from './app.routes';
import { GlobalService } from './global.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    StudentInfoComponent,
    StaffListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
