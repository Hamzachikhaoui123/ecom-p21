import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './../../../../assets/css/sb-admin-2.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
      Validators.minLength(6)
      ])
    }
    this.loginForm = this.fb.group(formControls)
  }
  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }
 


  ngOnInit(): void {
  }
  login() {
    let data = this.loginForm.value;
   
    console.log(data)
  }

}
