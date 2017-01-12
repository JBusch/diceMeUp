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
      let digit: Digit = action.payload.digit;
      let value: number = action.payload.value;
      return state.map((olddigit) => {
        if (olddigit.id === digit.id) {
          return Object.assign({}, digit, {value: value, added: true});
        } else {
          return olddigit;
        }
      });
    }

    case DigitActions.REMOVE: {
      return state.map((digit: Digit) => {
        if (digit.id === action.payload.id) {
          return Object.assign({}, digit, {value: 0, added: false});
        }
        return digit;
      });
    }

    case DigitsActions.DISABLE: {
      console.log(state);
      let digits = state.map((digit) => {
        console.log(digit);
        return Object.assign({}, digit, {disabled: true});
      });
      return digits;
    }

    case DigitsActions.ENABLE: {
      console.log(state);
      let digits = state.map((digit) => {
        return Object.assign({}, digit, {disabled: false});
      });
      return digits;
    }


    default: {
      return state;
    }
  }
}
