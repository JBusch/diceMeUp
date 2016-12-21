/* tslint:disable: member-ordering */
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Action} from '@ngrx/store';

import {Dice} from './dice/dice.model';

@Injectable()

export class DicesActions {

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

  static REMOVE = '[Dice] Remove Dice';

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
