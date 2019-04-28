import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router'
import { CourseInfo,CourseInfoDetails } from '../course-info';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course:string;
  cour:CourseInfo;
  coursedesc:string;
  usecase:string;
  CourseDetail:CourseInfo[]=CourseInfoDetails;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.course=params.get("coursename");  
    } )
    this.cour=this.CourseDetail.find(item=>item.name==this.course)
    this.coursedesc=this.cour.desc;
    console.log("asd",this.cour.desc)
    this.usecase=this.cour.usecase;
    

  }

}

 