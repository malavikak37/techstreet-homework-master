import { Injectable } from '@angular/core';
import { AngularService } from '../angular/service';

@Injectable()
export class LoginService {
  constructor(private _service: AngularService) {}

  login(username?, password?) {
    var currentUser;
    if ((username === 'Techstreet') && (password === 'homework')) {
      currentUser = { username: username, password: password };
      this._service.setDirective(4);
    } else {
      currentUser = { username: 'Fake User', password: 'foobar' };
      this._service.setDirective(3);
    }
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  reset() {
    this._service.reset();
  }
}
