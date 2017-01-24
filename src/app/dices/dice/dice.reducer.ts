/* tslint:disable: no-switch-case-fall-through */
import {Action} from '@ngrx/store';

import {DiceActions} from './dice.actions';
import {Dice} from './dice.model';
import {startWith} from "rxjs/operator/startWith";

export interface DiceState {
  dice: Dice
}

export const initialState: DiceState = {
  dice: {
    id: 0,
    activeSide: 1
  }
};

export function diceReducer(state = initialState, action: Action): DiceState {
  switch (action.type) {

    // case DiceActions.SELECTDICE: {
    //   console.log(action.payload, DiceActions.SELECTDICE);
    //   console.log(Object.assign({}, action.payload, {selected: true}));
    //
    //   return Object.assign({}, action.payload, {selected: true});
    // }

    default: {
      // console.log('state', {state});
      return state;
    }
  }
}
