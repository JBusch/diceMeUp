import {Effect, Actions, toPayload} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AngularFire, FirebaseAuthState} from "angularfire2";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {LoginActions} from "../login/login.actions";

@Injectable()
export class MainEffects {

  constructor(private actions$: Actions,
              private af: AngularFire) {
    console.log(this.actions$);
  }

  @Effect() update$ = this.actions$
    .ofType('SUPER_SIMPLE_EFFECT')
    .switchMap(() =>
      Observable.of({type: "SUPER_SIMPLE_EFFECT_HAS_FINISHED"})
    );


  @Effect() login$ = this.actions$
  // Listen for the 'LOGIN' action
    .ofType(LoginActions.LOGIN)
    .switchMap(action => this.af.auth.login(action.payload.user, action.payload.provider))
    .map(payload => ({type: LoginActions.SUCCESS, payload: payload}))
    .catch(error => {
        return Observable.of({
          type: LoginActions.ERROR, payload: error
        })
      }
    )
  //   .ofType(LoginActions.LOGIN)
  // .switchMap(action => {
  //   console.log('action', action);
  //
  //   return <any>this.af.auth.login(action.payload.user, action.payload.provider)
  //     .switchMap(action => { return action})
  //     .do(x => console.log(x))
  //     .map(res => ({type: 'LOGIN_SUCCESS', payload: res}))
  //     .catch(err => {
  //         console.log(err);
  //         return Observable.of({
  //           type: 'LOGIN_FAILURE xxx', payload: err
  //         })
  //       }
  //     )
  //
  // })
  // Map the payload into JSON to use as the request body
  // .map(action => JSON.stringify(action.payload))
  // .switchMap(payload => this.http.post('/auth', payload)
  //   // If successful, dispatch success action with result
  //     .map(res => ({type: 'LOGIN_SUCCESS', payload: res.json()}))
  //     // If request fails, dispatch failed action
  //     .catch(() => Observable.of({type: 'LOGIN_FAILED'}))
  // );

//   this.af.auth.login({
//   email: formData.value.email,
//   password: formData.value.password
// },
// {
//   provider: AuthProviders.Password,
//     method: AuthMethods.Password,
// }).then(
//   (success) => {
//     console.log(success);
//     this.router.navigate(['/player-area']);
//   }).catch(
//   (err) => {
//     console.log(err);
//     this.error = err;
//   })

}
