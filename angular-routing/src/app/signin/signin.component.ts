import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private formBuilder: FormBuilder,public router:Router) { }
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
     
msg:string ="";
onSubmit() {
    this.submitted = true;
     
    // stop here if form is invalid
    if (this.registerForm?.invalid) {
        return;
    }else {
      let login = this.registerForm.value;
      if(login.email=="admin@gmail.com" && login.password=="admin@123"){
        alert("successfully login")
          this.router.navigate(["home"]);
      }else {
        alert("failure try once again")
        this.msg = "Invalid emailid or password";
      }
    }
     
}

}
