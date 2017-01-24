/* tslint:disable: no-switch-case-fall-through */
import {Action} from '@ngrx/store';

import {DicesActions} from './dices.actions';
import {Dice} from './dice/dice.model';
import {startWith} from "rxjs/operator/startWith";
import {DiceActions} from "./dice/dice.actions";
import 'rxjs/add/operator/map';
import {CupActions} from "../cup/cup.actions";

export const DicesState = {
  dices: [
    {
      id: 1,
      activeSide: 5
    },
    {
      id: 2,
      activeSide: 5
    },
    {
      id: 3,
      activeSide: 5
    },
    {
      id: 4,
      activeSide: 5
    }, {
      id: 5,
      activeSide: 5
    }
  ],
  resultDices: []
};

const comparator = 'id';

export function dicesReducer(state = DicesState, action: Action) {
  switch (action.type) {

    case DicesActions.ROLLDICE: {
      console.log('sate', state);
      let dices = state.dices;
      let newDices = dices.map((dice) => {
        console.log('dice', dice);
        return Object.assign({}, dice, {activeSide: (Math.floor(Math.random() * 6) + 1)})
      });
      console.log('newdice', newDices);
      let resultDices = Array.from(state.resultDices);
      return {dices: newDices, resultDices};
    }

    case DiceActions.SELECTDICE: {
      let dice = action.payload;
      let dices = state.dices.filter(item => item.id !== dice.id);
      let resultDices = Array.from(state.resultDices);
      resultDices.push(dice);
      return {dices, resultDices};
    }

    case DiceActions.SELECTALLDICE: {
      let resultDices = Array.from(state.resultDices);
      let dices = Array.from(state.dices);
      dices.forEach((dice: Dice) => {
        resultDices.push(dice);
      });

      return {dices: [], resultDices};
    }


    case DiceActions.UNSELECTDICE: {
      let dice = action.payload;
      let resultDices = state.resultDices.filter(item => item.id !== dice.id);
      let dices = Array.from(state.dices);
      dice.selected = false;
      dices.push(dice);

      return {dices, resultDices};
    }

    case DicesActions.RESETDICE: {
      return DicesState;
    }

    default: {
      return state;
    }
  }
}
