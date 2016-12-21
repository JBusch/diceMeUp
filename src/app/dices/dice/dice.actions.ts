/* tslint:disable: member-ordering */
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Action} from '@ngrx/store';

import {Dice} from './dice.model';

@Injectable()

export class DiceActions {

  static SELECTDICE = '[Dice] Select Dice';

  SELECTDICE(dice: Dice): Action {
    return {
      type: DiceActions.SELECTDICE,
      payload: Object.assign({}, dice)
    };
  }

  

  static UNSELECTDICE = '[Dice] Unselect Dice';

  UNSELECTDICE(dice: Dice): Action {
    return {
      type: DiceActions.UNSELECTDICE,
      payload: Object.assign({}, dice)
    };
  }

  /*
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
