import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-list-form',
  templateUrl: './course-list-form.component.html',
  styleUrls: ['./course-list-form.component.css']
})
export class CourseListFormComponent implements OnInit {
  form;
  constructor(fb: FormBuilder) {
    this.form= fb.group({
        name: [],
        contact: fb.group({
          email: [],
          phone: []
        }),
        topics: fb.array([])
      });
     }
  addTopic(topic: HTMLInputElement){
  this.topics.push(new FormControl(topic.value));
  topic.value='';
  }
  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  get topics(){
    return this.form.get('topics') as FormArray;
  } 
  

  ngOnInit() {
  }

}
