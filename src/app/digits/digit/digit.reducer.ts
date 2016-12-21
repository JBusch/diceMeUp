/* tslint:disable: no-switch-case-fall-through */
import {Action} from '@ngrx/store';

import {DigitActions} from './digit.actions';
import {Digit} from './digit.model';
import {startWith} from "rxjs/operator/startWith";

export interface DigitState {
  digit: Digit;
}

export const initialState: DigitState = {
  digit: {
    id: null,
    label: null,
    value: null,
    added: null,
    locked: null
  }
};


export function digitReducer(state = initialState, action: Action): DigitState {
  switch (action.type) {

    case DigitActions.INCREMENT: {
      return Object.assign({}, state, {
        digit: action.payload
      });
    }

    default: {
      return state;
    }
  }
}

