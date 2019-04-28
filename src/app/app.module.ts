import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ByeComponent } from './bye/bye.component';
import {AppRoutingModule} from './app-routing.module';
import { JavaComponent } from './java/java.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ByeComponent,
    JavaComponent,
    HomeComponent,
    CourseComponent,
    ContactComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
