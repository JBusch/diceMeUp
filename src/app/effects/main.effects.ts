import {Effect, Actions, toPayload} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AngularFire, FirebaseAuthState, FirebaseObjectObservable} from "angularfire2";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {LoginActions} from "../login/login.actions";

@Injectable()
export class MainEffects {

  constructor(private actions$: Actions,
              private af: AngularFire) {
    console.log(this.actions$);
  }

  @Effect() login$ = this.actions$
  // Listen for the 'LOGIN' action
    .ofType(LoginActions.LOGIN)
    .switchMap(action => Observable.fromPromise(<Promise<any>>this.af.auth.login(action.payload.user, action.payload.provider))
      .map(payload => ({type: LoginActions.SUCCESS, payload: payload}))
      .catch(error => {
          return Observable.of({
            type: LoginActions.ERROR, payload: error
          })
        }
      )
    );

  @Effect() signup$ = this.actions$
  // Listen for the 'LOGIN' action
    .ofType(LoginActions.SIGNUP)
    .switchMap((action) =>
        // return Observable.forkJoin(Observable.fromPromise(<Promise<FirebaseAuthState>>this.af.auth.createUser({
        //     email: action.payload.email,
        //     password: action.payload.password
        //   })),
        //   Observable.of(action.payload)
        // )
        Observable.fromPromise(<Promise<FirebaseAuthState>>this.af.auth.createUser({
          email: action.payload.email,
          password: action.payload.password
        })), (action, user) => ({action, user})

      // return Observable.fromPromise(<Promise<FirebaseAuthState>>this.af.auth.createUser({
      //   email: action.payload.email,
      //   password: action.payload.password
      // }))
    )

    .map((payload) => {
      // console.log('in effect', payload);
      // setting unique username
      console.log('signupeffect', payload);
      return ({type: LoginActions.SIGNUP_SUCCESS, payload: payload})
    })
    .catch((error, obSerror) => {
      return Observable.of({type: LoginActions.SIGNUP_ERROR, payload: error});
    })
  ;

  @Effect() signupSuccess$ = this.actions$
  // Listen for the 'LOGIN' action
    .ofType(LoginActions.SIGNUP_SUCCESS)
    .switchMap((action: any) => {
      console.log('signupSuccess$', action);
      // return this.af.database.object('users/' + action.payload.auth.uid);
      // console.log((<FirebaseObjectObservable<any>>this.af.database.object('usernames/' + action.payload[1].username)).set(action.payload[0].uid),
      //   this.af.database.object('users/' + action.payload[0].uid).set({name: action.payload[1].username, age: 666}));
      return Observable.forkJoin(
        Observable.fromPromise(<Promise<any>>this.af.database.object('users/' + action.payload.user.uid).set({
          username: action.payload.action.payload.username
        })),
        Observable.fromPromise(<Promise<any>>this.af.database.object('usernames/' + action.payload.action.payload.username).set(action.payload.user.uid)),
        Observable.of(action.payload)
      )
        .map((result) => {
          return ({type: LoginActions.SIGNUP_CREATE_USER_SUCCESS, payload: result[2]})
        })
        .catch((error, obSerror) => {
          if (error.code === 'PERMISSION_DENIED') {
            console.log('error');
            this.af.auth
              .take(1)
              .subscribe(authState => {
                console.log(authState);
                authState.auth.delete()
                  .then(_ => console.log('deleted!'))
                  .catch(e => console.error(e))
              });
          }
          return Observable.of({type: LoginActions.SIGNUP_ERROR, payload: error});
        })
    });
}
