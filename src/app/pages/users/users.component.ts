import {Component, OnInit} from '@angular/core';
import * as Faker from 'faker';
import * as Factory from 'factory.ts';

export interface IUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  avatar?: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: IUser[];

  constructor() {

    const userFactory = Factory.Sync.makeFactory<IUser>({
      firstName: Factory.each(() => Faker.name.firstName()),
      lastName: Factory.each(() => Faker.name.lastName()),
      email: Factory.each(() => (Faker.internet.email())),
      avatar: Factory.each( () => Faker.image.avatar())
    });

    this.users = userFactory.buildList(10);

  }

  ngOnInit() {

  }

}
