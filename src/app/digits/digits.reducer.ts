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
    disabled: false,
    isAddable: false
  },
  {
    id: 2,
    label: '2er',
    value: 0,
    added: false,
    locked: false,
    disabled: false,
    isAddable: false
  },
  {
    id: 3,
    label: '3er',
    value: 0,
    added: false,
    locked: false,
    disabled: false,
    isAddable: false
  },
  {
    id: 4,
    label: '4er',
    value: 0,
    added: false,
    locked: false,
    disabled: false,
    isAddable: false
  },
  {
    id: 5,
    label: '5er',
    value: 0,
    added: false,
    locked: false,
    disabled: false,
    isAddable: false
  },
  {
    id: 6,
    label: '6er',
    value: 0,
    added: false,
    locked: false,
    disabled: false,
    isAddable: false
  },
  {
    id: 7,
    label: '3 of a  kind',
    value: 0,
    added: false,
    locked: false,
    disabled: false,
    isAddable: false
  },
  {
    id: 8,
    label: '4 of a kind',
    value: 0,
    added: false,
    locked: false,
    disabled: false,
    isAddable: false
  },
  {
    id: 9,
    label: 'Full House',
    value: 25,
    added: false,
    locked: false,
    disabled: false,
    isAddable: false
  },
  {
    id: 10,
    label: 'Small straight',
    value: 30,
    added: false,
    locked: false,
    disabled: false,
    isAddable: false
  },
  {
    id: 11,
    label: 'Large straight',
    value: 40,
    added: false,
    locked: false,
    disabled: false,
    isAddable: false
  },
  {
    id: 12,
    label: 'dicedItup!',
    value: 50,
    added: false,
    locked: false,
    disabled: false,
    isAddable: false
  }
];

const comparator = 'id';

export function digitsReducer(state = DigitsState, action: Action) {
  switch (action.type) {

    case DigitsActions.TOGGLEADDABLE: {
      switch (action.payload) {
        case 'largeStraightValid': {
          let digit = Object.assign({}, state[10], {isAddable: true});
          let stateClone = state.slice(0);
          stateClone[10] = digit;
          return stateClone;
        }
      }
      return state;
    }

    case DigitsActions.RESETADDABLE: {
      return state.map((digit: Digit) => {
        return Object.assign({}, digit, {isAddable: false});
      });
    }


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
        return Object.assign({}, digit, {
          disabled: false,
          isAddable: false
        });
      });
      return digits;
    }


    default: {
      return state;
    }
  }
}
