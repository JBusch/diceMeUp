import {Component, OnInit} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import {Router} from '@angular/router';
import {Store} from "@ngrx/store";
import {LoginActions} from "../login/login.actions";


@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.scss']
})
export class LoginEmailComponent {
  constructor(private router: Router,
              private _store: Store<any>,
              private loginActions: LoginActions) {
    this._store.select('login').subscribe((result: any) => {
      if (result.loggedIn) {
        this.router.navigateByUrl('/player-area');
      }
    });
  }

  onSubmit(formData) {
    if (formData.valid) {
      this._store.dispatch(this.loginActions.login({
        email: formData.value.email,
        password: formData.value.password
      }, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }));
    }
  }
}
