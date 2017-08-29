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
  private userName: string = "";
  private password: string = "";
  private errorValidation: boolean = false;
  private errorMessage: string = "";


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
   if (this.userName.length > 0 && this.password.length > 0) {
      this.errorValidation = false;
      this._loginService.login(this.userName, this.password);
    }
    else {
      this.errorValidation = true;
      if (this.userName.length == 0 && this.password.length == 0) {
        this.errorMessage = "Please enter username & password";
      }
      else if (this.userName.length == 0) {
        this.errorMessage = "please enter username";
      }
      else if (this.password.length == 0) {
        this.errorMessage = "please enter password";
      }
    }
 
  }
}
