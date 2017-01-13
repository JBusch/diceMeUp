/* tslint:disable: no-switch-case-fall-through */
import {Action} from '@ngrx/store';
import {Game} from "./game.model";
import {GameActions} from "./game.actions";

export const GameState: Game = {
  id: 0,
  playerId: 0,
  countRound: 1,
  countRolls: 0
};

const comparator = 'id';

export function gameReducer(state = GameState, action: Action) {
  switch (action.type) {

    case GameActions.INCREMENTROUND: {
      console.log('gameaction', state);
      return Object.assign({}, state, {countRound: state.countRound + 1});
    }

    case GameActions.INCREMENTROLLS: {
      return Object.assign({}, state, {countRolls: state.countRolls + 1});
    }

    default: {
      return state;
    }
  }
}
