import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent {
  title = 'frontend';

  constructor(private users: UsersService) {
    this.getusers();
  }

  getusers = () => {
    this.users.getallusers().subscribe(
      data => {
        this.movies = data;
      }
      error => {
        console.log(error);
      }
    )
  }
}
