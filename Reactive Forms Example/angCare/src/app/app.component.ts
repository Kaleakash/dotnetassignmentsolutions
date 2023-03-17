import { Component,OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private formBuilder: FormBuilder) { }
   status = 'You haven\'t signed up yet';
  name = '';
  submitted = false;
  registerForm: FormGroup;
  ontyping(event:Event) {
     
    this.name = (<HTMLInputElement>event.target).value;
  }
  signup() {
  
     this.status = 'Oops! We are working on it!';
     
  }
     
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
     
get f() { 
  if(this.registerForm?.controls!=null){
    return this.registerForm.controls;
  }  
  return null;
}
     
onSubmit() {
    this.submitted = true;
     
    // stop here if form is invalid
    if (this.registerForm?.invalid) {
        return;
    }
     
    alert('Your request has been submitted for approval')
}

}
