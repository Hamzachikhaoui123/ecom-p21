import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './../../../../assets/css/sb-admin-2.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
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
    let isLoggedIn = this.userService.isLoggedIn()
    if (isLoggedIn) {
      this.router.navigate(['/']);
    }
  }
  login() {
    let data = this.loginForm.value;

    this.userService.loginAdmin(data).subscribe(
      res => {
        console.log(res);
        let token = res.token;
        localStorage.setItem("myToken", token);

        this.router.navigate(['/dashboard']);

      },
      err => {
        console.log(err);

      }
    )
  }


}
