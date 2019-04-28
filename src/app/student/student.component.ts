import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  name:string;

  constructor(private route:ActivatedRoute,private router:Router ) { }

  ngOnInit() 
  
  {
    this.route.paramMap.subscribe(params=>{
    this.name=params.get("names");

  })

  }

}
