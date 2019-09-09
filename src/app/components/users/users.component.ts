import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };

  users: User[];
  showExtended = true;
  // tslint:disable-next-line: no-inferrable-types
  enableAdd = false;
  showUserForm = false;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/01/2018'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@yahoo.com',
        isActive: false,
        registered: new Date('11/03/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen@gmail.com',
        isActive: true,
        registered: new Date('10/04/2014 02:26'),
        hide: true
      }
    ];
  }
  /*
  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();

    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }
*/
  toggleHide(user) {
    user.hide = !user.hide;
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(2342);
  }
}
