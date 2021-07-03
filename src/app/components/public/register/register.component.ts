import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './../../../../assets/css/sb-admin-2.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Z][a-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Z][a-z .'-]+"),
        Validators.minLength(2)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      repassword: new FormControl('', [
        Validators.required
      ])
    }
    this.registerForm = this.fb.group(formControls)

  }
  get firstname() { return this.registerForm.get("firstname") }
  get lastname() { return this.registerForm.get("lastname") }
  get email() { return this.registerForm.get("email") }
  get password() { return this.registerForm.get("password") }
  get repassword() { return this.registerForm.get("repassword") }

  ngOnInit(): void {
  }
  register() {
    let data = this.registerForm.value
    this.userService.registerUser(data).subscribe(
      res => {
        this.router.navigate(['/login'])
      },
      err => {
        console.log(err);

      }
    )
   

  }

}
