import { NgModule } from '@angular/core';
import { AngularMessageComponent } from './message.component';
import { Piped } from './pipe';
import { AngularService } from './service';

@NgModule({
  declarations: [
    AngularMessageComponent,
    Piped
  ],
  exports: [
    AngularMessageComponent,
    Piped
  ],
  providers: [
    AngularService
  ]
})
export class InitModule { }
