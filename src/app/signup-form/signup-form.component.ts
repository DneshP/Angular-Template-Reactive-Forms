import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
reactiveform = new FormGroup({
  account: new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ],
    UsernameValidators.shouldBeUnique),
    password: new FormControl('',Validators.required)
  })
});

get username(){
  return this.reactiveform.get('account.username');
}
login(){
  this.reactiveform.setErrors({
    invalidLogin: {
      username:'error',
      password:'error'}
  });

}
  constructor() { }

}
