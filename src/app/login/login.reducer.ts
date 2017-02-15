import {Action} from '@ngrx/store';
import 'rxjs/add/operator/map';
import {LoginActions} from "./login.actions";

export type LoginState = {};

export const initialState = {
  name: '',
  loggedIn: false,
  credentials: ''
};


const comparator = 'id';
export function loginReducer(state = initialState, action: Action) {
  switch (action.type) {

    case LoginActions.SUCCESS: {
      return {loggedIn: true, credentials: action.payload.auth.email}
    }

    case LoginActions.SIGNUP_CREATE_USER_SUCCESS: {
      console.log(action);
      return {loggedIn: true, credentials: action.payload[0].auth.email, username: action.payload[1].username}
    }

    case LoginActions.SIGNUP_ERROR: {
      console.log(action.payload);
      return state;
      // return {loggedIn: true, credentials: action.payload.auth.email}
    }

    default: {
      return state;
    }
  }
}
