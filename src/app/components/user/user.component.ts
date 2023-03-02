import { UserService } from './../../services/user.service';
import { User } from './../../interfaces/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user!: User | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log('Hello world!');
    this.userService
      .getUser()
      .toPromise()
      .then((user) => {
        this.user = user?.results[0];
      });
  }
}
