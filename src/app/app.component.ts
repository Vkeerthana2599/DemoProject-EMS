import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EMSRMPLOYEEMANAGEMENTSYSTEM';

  constructor() {
  }

  ngOnInit() {
  }

  // logout() {
  //     this.authenticationService.logout();
  // }
}
