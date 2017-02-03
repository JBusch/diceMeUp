/* tslint:disable: no-switch-case-fall-through */
import {Action} from '@ngrx/store';
import {Game} from "./game.model";
import {GameActions} from "./game.actions";

export type GameState = Game;

export const initialState: GameState = {
  id: 0,
  playerId: 0,
  countRound: 1,
  countRolls: 0
};

const comparator = 'id';

export function gameReducer(state = initialState, action: Action) {
  switch (action.type) {

    case GameActions.INCREMENTROUND: {
      return Object.assign({}, state, {countRound: state.countRound + 1, countRolls: 0});
    }

    case GameActions.INCREMENTROLLS: {
      return Object.assign({}, state, {countRolls: state.countRolls + 1});
    }

    case 'SUPER_SIMPLE_EFFECT_HAS_FINISHED': {
      console.log('bla bla bla ')
    }

    default: {
      return state;
    }
  }
}
