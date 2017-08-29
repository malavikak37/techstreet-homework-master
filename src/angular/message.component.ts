import { Component, OnInit } from '@angular/core';
import { AngularService } from './service';

@Component({
  selector: 'ng-msg-comp',
  template: `<span><ng-content></ng-content></span>`
})
export class AngularMessageComponent implements OnInit {
  public directive: number;
  constructor(private _service: AngularService) { this._service._directive.subscribe(data => this.directive = data); }
  ngOnInit() { this._service.setDirective(0); }
}
