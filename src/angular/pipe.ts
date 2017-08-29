import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'piped' })
export class Piped implements PipeTransform {
  transform(value: number = null): string {
    var currentUserString = localStorage.getItem('currentUser');
    var currentUser = currentUserString && JSON.parse(currentUserString);
    var username = currentUser && currentUser['username'];
    var piped;
    switch(value) {
      case 0:
        piped = 'We need to be able to log in to the app.  Add the login component to this template.  '
          + 'You\'ll find the component at /src/app/login.component.ts';
        break;
      case 1:
        piped = 'For now, the login form doesn\'t actually do anything. Hook up the login component\'s '
          + 'save() method to the submit button and click it to advance.';
        break;
      case 2:
        piped = 'The save() method is now connected, but the form needs to connect to an external service. '
          + 'Keep the save method but change it so that it connects to the login() method on the service, '
          + 'which is located at /src/app/login.service.ts';
        break;
      case 3:
        piped = 'You are currently logged in as ' +username+ ' which was hard-coded. '
          + 'Change the template to use Angular forms and submit the name "Techstreet" and password "homework" '
          + 'to the login service.';
        break;
      case 4:
        piped = 'You are now logged in as ' +username+ '. '
          + 'Change the form template so that the input fields are validated before submission. '
          + 'We want both fields to be required, with an error message displayed if validation fails.'
        break;
      default:
        piped = 'current step: ' + value
    }
    return 'Problem ' + (value+1) + ': ' + piped;
  }
}
