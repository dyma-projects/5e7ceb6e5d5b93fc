import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor() { }

  addUser(username: string) {
    this.users.next(this.users.getValue().concat(username));
  }
}
