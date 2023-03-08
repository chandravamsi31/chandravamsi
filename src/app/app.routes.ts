import { Routes } from '@angular/router';
import { StaffListComponent } from './staff-list/staff-list.component';
import { UsersListComponent } from './users-list/users-list.component'

export const appRoutes: Routes = [
    {
        path: 'staff',
        component: StaffListComponent
    },
    {
        path: 'student',
        component: UsersListComponent
    }
]