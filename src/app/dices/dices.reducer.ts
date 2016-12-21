/* tslint:disable: no-switch-case-fall-through */
import {Action} from '@ngrx/store';

import {DicesActions} from './dices.actions';
import {Dice} from './dice/dice.model';
import {startWith} from "rxjs/operator/startWith";
import {DiceActions} from "./dice/dice.actions";
import 'rxjs/add/operator/map';

export const DicesState = {
  dices: [
    {
      id: 1,
      activeSide: 1,
      selected: false
    },
    {
      id: 2,
      activeSide: 1,
      selected: false
    },
    {
      id: 3,
      activeSide: 1,
      selected: false
    },
    {
      id: 4,
      activeSide: 2,
      selected: false
    }, {
      id: 5,
      activeSide: 1,
      selected: false
    }
  ],
  resultDices: []
};

const comparator = 'id';

export function dicesReducer(state = DicesState, action: Action) {
  switch (action.type) {

    case DiceActions.SELECTDICE: {
      let dice = action.payload;
      let dices = state.dices.filter(item => item.id !== dice.id);
      let resultDices = Array.from(state.resultDices);
      dice.selected = true;
      resultDices.push(dice);

      return {dices, resultDices};
    }

    case DiceActions.UNSELECTDICE: {
      let dice = action.payload;
      let resultDices = state.resultDices.filter(item => item.id !== dice.id);
      let dices = Array.from(state.dices);
      dice.selected = false;
      dices.push(dice);

      return {dices, resultDices};
    }

    default: {
      return state;
    }
  }
}
