import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2";

@Injectable()
export class UsersService {

  constructor(private db: AngularFireDatabase) {
    db.list('Test');
  }

}
