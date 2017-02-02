import {Action} from '@ngrx/store';
import 'rxjs/add/operator/map';
import {LoginActions} from "./login.actions";

export const LoginState = {
  loggedIn: false,
  credentials: ''
};

const comparator = 'id';

export function loginReducer(state = LoginState, action: Action) {
  switch (action.type) {

    case LoginActions.SUCCESS: {
      console.log(action, state);
      return {loggedIn: true, credentials: action.payload.auth.email}
    }

    // case DicesActions.ROLLDICE: {
    //   console.log('sate', state);
    //   let dices = state.dices;
    //   let newDices = dices.map((dice) => {
    //     console.log('dice', dice);
    //     return Object.assign({}, dice, {activeSide: (Math.floor(Math.random() * 6) + 1)})
    //   });
    //   console.log('newdice', newDices);
    //   let resultDices = Array.from(state.resultDices);
    //   return {dices: newDices, resultDices};
    // }
    //
    // case DiceActions.SELECTDICE: {
    //   let dice: Dice = Object.assign({}, action.payload);
    //   let dices: Dice[] = state.dices.filter(item => item.id !== dice.id);
    //   let resultDices: Dice [] = Array.from(state.resultDices);
    //   dice.selected = true;
    //   resultDices.push(dice);
    //   return {dices, resultDices};
    // }
    //
    // case DiceActions.SELECTALLDICE: {
    //   let resultDices = Array.from(state.resultDices);
    //   let dices = Array.from(state.dices);
    //   dices.forEach((dice: Dice) => {
    //     resultDices.push(dice);
    //   });
    //
    //   return {dices: [], resultDices};
    // }
    //
    //
    // case DiceActions.UNSELECTDICE: {
    //   let dice = action.payload;
    //   let resultDices = state.resultDices.filter(item => item.id !== dice.id);
    //   let dices = Array.from(state.dices);
    //   dice.selected = false;
    //   dices.push(dice);
    //
    //   return {dices, resultDices};
    // }

    // case DicesActions.RESETDICE: {
    //   return DicesState;
    // }

    default: {
      return state;
    }
  }
}
