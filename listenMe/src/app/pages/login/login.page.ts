import { Component, OnInit } from '@angular/core';
//import { ConsoleReporter } from 'jasmine';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

  }

  login() {
    console.log(this.loginForm.value);
  }

  ngOnInit() {

  }

}