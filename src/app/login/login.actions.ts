import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {IUserCredentials} from "../models/users.model";

@Injectable()
export class LoginActions {

  static LOGIN = '[Login] Login attempt';

  login(user: IUserCredentials, provider): Action {
    return {
      type: LoginActions.LOGIN,
      payload: {user, provider}
    }
  }

  static SIGNUP = '[Login] Signup attempt';

  signUp(user: IUserCredentials): Action {
    return {
      type: LoginActions.SIGNUP,
      payload: user
    }
  }

  static SUCCESS = '[Login] Login success';
  static ERROR = '[Login] Login error';

  static SIGNUP_SUCCESS = '[Login] Signup success';
  static SIGNUP_ERROR = '[Login] Signup error';

  static SIGNUP_CREATE_USER_SUCCESS = '[Login] Create User success';
  static SIGNUP_SET_USERNAME_SUCCESS = '[Login] Set Username success';

  // static SELECTDICE = '[Dice] Select Dice';
  //
  // SELECTDICE(dice: Dice): Action {
  //   return {
  //     type: DicesActions.SELECTDICE,
  //     payload: Object.assign({}, dice)
  //   };
  // }
  //
  // static UNSELECTDICE = '[Dice] Unselect Dice';
  //
  // UNSELECTDICE(dice: Dice): Action {
  //   return {
  //     type: DicesActions.UNSELECTDICE,
  //     payload: Object.assign({}, dice)
  //   };
  // }


  // static UNSELECTDICE = '[Dice] Unselect Dice';
  //
  // UNSELECTDICE(dice: Dice): Action {
  //   return {
  //     type: DicesActions.UNSELECTDICE,
  //     payload: Object.assign({}, dice)
  //   };
  // }

  // static REMOVE = '[Dice] Remove Dice';

  /*REMOVE(dice: Dice): Action {
   return {
   type: DiceActions.REMOVE,
   payload: Object.assign({}, dice, dice.value++)
   };
   }

   remove(dice): void {
   dice.value = 0;
   this.added = false;
   dice.added = false;
   }

   setLocked(dice) {
   dice.locked = true;
   }*/


  static INCREMENT = '[Dice] Increment Dice';

  /*increment(dice: Dice): Action {
   return {
   type: DiceActions.INCREMENT,
   payload: Object.assign({}, dice, dice.value++)
   };
   }

   static DECREMENT = '[Dice] Decrement Dice';

   decrement(dice: Dice): Action {
   return {
   type: DiceActions.DECREMENT,
   payload: Object.assign({}, dice, dice.value--)
   };
   }

   static RESET = '[Dice] Reset Dice';

   reset(dice: Dice): Action {
   return {
   type: DiceActions.RESET,
   payload: Object.assign({}, dice, dice.value = 0)
   };
   }*/
}
