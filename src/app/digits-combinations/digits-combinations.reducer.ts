/* tslint:disable: no-switch-case-fall-through */
import {Action} from '@ngrx/store';
import {DigitsCombinationsActions} from './digits-combinations.actions';
import {DigitsCombinations} from './digits-combinations.model';
import 'rxjs/add/operator/map';
import {Digit} from "../digits/digit/digit.model";

export const DigitsCombinationsState: DigitsCombinations[] = [
  {
    id: 7,
    label: '3 of a  kind',
    value: 0,
    added: false,
    locked: false,
    disabled: false
  },
  {
    id: 8,
    label: '4 of a kind',
    value: 0,
    added: false,
    locked: false,
    disabled: false
  },
  {
    id: 9,
    label: 'Full House',
    value: 25,
    added: false,
    locked: false,
    disabled: false
  },
  {
    id: 10,
    label: 'Small straight',
    value: 30,
    added: false,
    locked: false,
    disabled: false
  },
  {
    id: 11,
    label: 'Large straight',
    value: 40,
    added: false,
    locked: false,
    disabled: false
  },
  {
    id: 6,
    label: 'dicedItup!',
    value: 50,
    added: false,
    locked: false,
    disabled: false
  }
];

const comparator = 'id';

export function digitsCombinationsReducer(state = DigitsCombinationsState, action: Action) {
  switch (action.type) {

    case DigitsCombinationsActions.ADD: {
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

    case DigitsCombinationsActions.REMOVE: {
      return state.map((digit: Digit) => {
        if (digit.id === action.payload.id) {
          return Object.assign({}, digit, {value: 0, added: false});
        }
        return digit;
      });
    }

    case DigitsCombinationsActions.DISABLE: {
      console.log(state);
      let digits = state.map((digit) => {
        console.log(digit);
        return Object.assign({}, digit, {disabled: true});
      });
      return digits;
    }

    case DigitsCombinationsActions.ENABLE: {
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
