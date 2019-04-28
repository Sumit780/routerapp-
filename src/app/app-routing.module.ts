import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HelloComponent} from './hello/hello.component';
import {ByeComponent} from './bye/bye.component';
import { JavaComponent } from './java/java.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { StudentComponent } from './student/student.component';

const appRoutes:Routes=[
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'courses',
        redirectTo:'courses/testUser',
        pathMatch:'full'
    },
    {
        path:'courses/:coursename',
        component:CourseComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'student',
        redirectTo:'student/testUser',
        pathMatch:'full'
    },
    {
        path:"student/:names",
        component:StudentComponent
    },
    { 
        path:'',
       redirectTo:"home", pathMatch:'full'
    },
    { 
        path:'**',
       redirectTo:"home", pathMatch:'full'
    },
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}