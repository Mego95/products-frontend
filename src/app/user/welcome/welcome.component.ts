import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  fullname$ = this.service.loggedInUserName$;
  constructor(private service: AppService) {}
}
