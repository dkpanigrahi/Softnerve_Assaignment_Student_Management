import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { AddstudentComponent } from './Component/addstudent/addstudent.component';
import { authGuard } from '../services/auth.guard';
import { IndexComponent } from './Component/index/index.component';
import { EditstudentComponent } from './Component/editstudent/editstudent.component';


export const routes: Routes = [

    {
        path:'login',
        'component':LoginComponent,
    },
    {
        path:'',
        'component':IndexComponent,
    },
    {
        path:'home',
        'component':HomeComponent,
        canActivate: [authGuard]
    },
    {
        path:'addStudent',
        'component':AddstudentComponent,
        canActivate: [authGuard]
    },
    { path: 'students/update/:id',
     'component': EditstudentComponent, 
    },
];
