import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users : User[];
isBrief : boolean;
enableAdd : boolean =  true;


  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address : {
          street: '50 st main',
          city: 'Boston',
          state: 'MA'
        },
        image : 'http://lorempixel.com/600/600/people/3',
      }, {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address : {
          street: '20 School street',
          city: 'Lynn',
          state: 'MA'
        },
        image : 'http://lorempixel.com/600/600/people/2', 
      }, {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address : {
          street: '55 Mill Street',
          city: 'Miami',
          state: 'Fl'
        },
        image : 'http://lorempixel.com/600/600/people/1',
      }      
    ];
    this.isBrief = false;
    this.userAdd({
      firstName: 'David',
      lastName: 'Jackson',
      age: 44,
      address : {
        street: '12 Wake Street',
        city: 'Miami',
        state: 'Fl'
      }
    }      );
  }

    userAdd(user:User) {
      this.users.push(user);
    }
}
