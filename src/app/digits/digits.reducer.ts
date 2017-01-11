/* tslint:disable: no-switch-case-fall-through */
import {Action} from '@ngrx/store';

import {DigitsActions} from './digits.actions';
import {Digit} from './digit/digit.model';
import {DigitActions} from "./digit/digit.actions";
import 'rxjs/add/operator/map';

export const DigitsState: Digit[] = [
  {
    id: 1,
    label: '1er',
    value: 0,
    added: false,
    locked: false,
    disabled: false
  },
  {
    id: 2,
    label: '2er',
    value: 0,
    added: false,
    locked: false,
    disabled: false
  },
  {
    id: 3,
    label: '3er',
    value: 0,
    added: false,
    locked: false,
    disabled: false
  },
  {
    id: 4,
    label: '4er',
    value: 0,
    added: false,
    locked: false,
    disabled: false
  },
  {
    id: 5,
    label: '5er',
    value: 0,
    added: false,
    locked: false,
    disabled: false
  },
  {
    id: 6,
    label: '6er',
    value: 666,
    added: false,
    locked: false,
    disabled: false
  }
];

const comparator = 'id';

export function digitsReducer(state = DigitsState, action: Action) {
  switch (action.type) {

    case DigitActions.ADD: {
      console.log(action.payload, state);
      return state.map((digit: Digit) => {
        if (digit.id === action.payload.digit.id) {
          digit.value = action.payload.value;
        }
        return digit;
      });
    }

    case DigitActions.REMOVE: {
      console.log(action.payload, state);
      return state.map((digit: Digit) => {
        if (digit.id === action.payload.id) {
          digit.value = 0;
        }
        return digit;
      });
    }

    case DigitsActions.DISABLE: {
      let digits = state;
      digits.forEach((digit) => {
        digit.disabled = true;
      });

      return Object.assign(state, digits);
    }


    default: {
      return state;
    }
  }
}
