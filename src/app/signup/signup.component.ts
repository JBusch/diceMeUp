import {Component, OnInit} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import {Router} from '@angular/router';
import {AppState} from "../app.reducers";
import {Store} from "@ngrx/store";
import {LoginActions} from "../login/login.actions";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  // state: string = '';
  // error: any;
  loginState: boolean;
  username: string;

  constructor(public af: AngularFire,
              private router: Router,
              private _store: Store<AppState>,
              private loginActions: LoginActions) {
    this._store.select('login').subscribe((result: any) => {
      console.log(result);
      if (result.loggedIn) {
        console.log('replay');
        this.loginState = result.loggedIn;
        this.username = result.username;
        this.router.navigateByUrl('/');
      }
    });

  }

  onSubmit(formData) {
    console.log(formData);
    if (formData.valid) {
      this._store.dispatch(this.loginActions.signUp({
        email: formData.value.email,
        password: formData.value.password,
        username: formData.value.username
      }));
    }
  }

}
