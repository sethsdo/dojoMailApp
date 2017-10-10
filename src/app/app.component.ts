import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dojoMail = [
    {
      email: "root@root.com",
      importance: true,
      subject: "New Windows",
      content: "some random information"
    },
    {
      email: "Something@gates.com",
      importance: false,
      subject: "New Windows",
      content: "some random information"
    },
    {
      email: "CRAZY@bates.com",
      importance: true,
      subject: "New Windows",
      content: "some random information"
    }
  ]
}
