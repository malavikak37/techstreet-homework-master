import { Component, OnInit } from '@angular/core';
import { AngularService } from '../angular/service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  providers: [LoginService]
})
export class LoginComponent {
  loginForm: FormGroup;
  loggedIn: string = null;

  constructor(
    private _service: AngularService,
    private _builder: FormBuilder,
    private _loginService: LoginService
  ) {
    this.loginForm = this._builder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
    this.loggedIn = localStorage.getItem('currentUser');
    this._service.setDirective(1);
  }
  save() {
    this._service.setDirective(2);
    this._loginService.login();
 
  }
}
