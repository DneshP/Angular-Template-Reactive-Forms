import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-list-form',
  templateUrl: './course-list-form.component.html',
  styleUrls: ['./course-list-form.component.css']
})
export class CourseListFormComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
  }
  constructor() { }

  ngOnInit() {
  }

}
