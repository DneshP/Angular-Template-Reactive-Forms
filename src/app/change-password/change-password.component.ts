import { PasswordValidator } from './password-check.validators';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
form;
  constructor(fb: FormBuilder) { 
    this.form=fb.group({
     oldPassword: ['',Validators.required,[PasswordValidator.oldPasswordValidation]],
      newPassword:['',Validators.required],
     confirmPassword:['',Validators.required]
    },{
      validator: PasswordValidator.passwordsShouldMatch
    });
  }

  get oldPassword(){
    return this.form.get('oldPassword');
  }
  get newPassword(){
    return this.form.get('newPassword');
  }
  get confirmPassword(){
    return this.form.get('confirmPassword');
  }
  submit(f){
    console.log(f);
  }

}
