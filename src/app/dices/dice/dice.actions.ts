/* tslint:disable: member-ordering */
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Action} from '@ngrx/store';

import {Dice} from './dice.model';

@Injectable()

export class DiceActions {

  static SELECTDICE = '[Dice] Select Dice';

  selectDice(dice: Dice): Action {
    return {
      type: DiceActions.SELECTDICE,
      payload: Object.assign({}, dice)
    };
  }

  static SELECTALLDICE = '[Dice] Select all dices';

  selectAllDice(): Action {
    return {
      type: DiceActions.SELECTALLDICE
    };
  }


  static UNSELECTDICE = '[Dice] Unselect Dice';

  unselectDice(dice: Dice): Action {
    return {
      type: DiceActions.UNSELECTDICE,
      payload: Object.assign({}, dice)
    };
  }
}
