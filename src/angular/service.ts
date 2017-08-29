import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AngularService {
  private directive = new Subject<number>();
  _directive = this.directive.asObservable();
  setDirective(n: number) { const directive = localStorage.getItem('directive'); if ((n == null) || (Number(directive) < n)) { localStorage.setItem('directive', `${n}`); this.directive.next(n); } else { this.directive.next(Number(directive)); }}
  reset() { localStorage.removeItem('currentUser'); localStorage.removeItem('directive'); this.directive.next(0); }
}
