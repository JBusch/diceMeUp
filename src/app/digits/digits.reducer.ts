/* tslint:disable: no-switch-case-fall-through */
import {Action} from '@ngrx/store';

import {DigitsActions} from './digits.actions';
import {Digit} from './digit/digit.model';
import {DigitActions} from "./digit/digit.actions";
import 'rxjs/add/operator/map';

export const DigitsState = [
  {
    id: 1,
    label: '1er',
    value: 0,
    added: false,
    locked: false
  },
  {
    id: 2,
    label: '2er',
    value: 0,
    added: false,
    locked: false
  },
  {
    id: 3,
    label: '3er',
    value: 0,
    added: false,
    locked: false
  },
  {
    id: 4,
    label: '4er',
    value: 0,
    added: false,
    locked: false
  },
  {
    id: 5,
    label: '5er',
    value: 0,
    added: false,
    locked: false
  },
  {
    id: 6,
    label: '6er',
    value: 0,
    added: false,
    locked: false
  }
];

const comparator = 'id';

export function digitsReducer(state = DigitsState, action: Action) {
  switch (action.type) {

    case DigitsActions.ADD: {
      let digits = state;
      digits.forEach((digit) => {
        // digit.activeSide = (Math.floor(Math.random() * 6) + 1);
      });

      return Object.assign(state, digits);
    }


    default: {
      return state;
    }
  }
}
