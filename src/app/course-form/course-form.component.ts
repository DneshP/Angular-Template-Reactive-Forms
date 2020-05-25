import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  categories=[
  {id:1,name:'Development'},
  {id:2,name:'Beginner'},
  {id:3,name:'Advancements'}
]

  constructor() { }
submit(course){
  console.log(course);
}
  ngOnInit() {
  }
}
