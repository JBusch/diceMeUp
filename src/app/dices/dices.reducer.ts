/* tslint:disable: no-switch-case-fall-through */
import {Action} from '@ngrx/store';

import {DicesActions} from './dices.actions';
import {Dice} from './dice/dice.model';
import {startWith} from "rxjs/operator/startWith";
import {DiceActions} from "./dice/dice.actions";
import 'rxjs/add/operator/map';
import {CupActions} from "../cup/cup.actions";

export type DicesState =  { dices: Dice[], resultDices: Dice[] };

export const initialState = {
  dices: [
    {
      id: 1,
      activeSide: 5,
      selected: false
    },
    {
      id: 2,
      activeSide: 5,
      selected: false
    },
    {
      id: 3,
      activeSide: 5,
      selected: false
    },
    {
      id: 4,
      activeSide: 5,
      selected: false
    }, {
      id: 5,
      activeSide: 5,
      selected: false
    }
  ],
  resultDices: []
};


const comparator = 'id';

export function dicesReducer(state = initialState, action: Action) {
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
      let dice: Dice = Object.assign({}, action.payload);
      let dices: Dice[] = state.dices.filter(item => item.id !== dice.id);
      let resultDices: Dice [] = Array.from(state.resultDices);
      dice.selected = true;
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
      return initialState;
    }

    default: {
      return state;
    }
  }
}
