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
    value: 0,
    added: false,
    locked: false,
    disabled: false,
    isAddable: false
  },
  {
    id: 10,
    label: 'Small straight',
    value: 0,
    added: false,
    locked: false,
    disabled: false,
    isAddable: false
  },
  {
    id: 11,
    label: 'Large straight',
    value: 0,
    added: false,
    locked: false,
    disabled: false,
    isAddable: false
  },
  {
    id: 12,
    label: 'dicedItup!',
    value: 0,
    added: false,
    locked: false,
    disabled: false,
    isAddable: false
  },
  {
    id: 13,
    label: 'Chance',
    value: 0,
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
        case 'noStraight': {
          let largeStraightDigit = Object.assign({}, state[10], {isAddable: false});
          let smallStraightDigit = Object.assign({}, state[9], {isAddable: false});
          let stateClone = state.slice(0);
          stateClone[10] = largeStraightDigit;
          stateClone[9] = smallStraightDigit;
          return stateClone;
        }

        case 'largeStraightValid': {
          let largeStraightDigit = Object.assign({}, state[10], {isAddable: true});
          let smallStraightDigit = Object.assign({}, state[9], {isAddable: true});
          let stateClone = state.slice(0);
          stateClone[10] = largeStraightDigit;
          stateClone[9] = smallStraightDigit;
          return stateClone;
        }

        case 'largeStraightInvalid': {
          let largeStraightDigit = Object.assign({}, state[10], {isAddable: false});
          let stateClone = state.slice(0);
          stateClone[10] = largeStraightDigit;
          return stateClone;
        }

        case 'smallStraightValid': {
          let smallStraightDigit = Object.assign({}, state[9], {isAddable: true});
          let stateClone = state.slice(0);
          stateClone[9] = smallStraightDigit;
          return stateClone;
        }

        case 'smallStraightInvalid': {
          let smallStraightDigit = Object.assign({}, state[9], {isAddable: false});
          let stateClone = state.slice(0);
          stateClone[9] = smallStraightDigit;
          return stateClone;
        }

        case 'diceMeUpValid': {
          let threeOfAKindDigit = Object.assign({}, state[6], {isAddable: true});
          let fourOfAKindDigit = Object.assign({}, state[7], {isAddable: true});
          let fullHouseDigit = Object.assign({}, state[8], {isAddable: true});
          let diceMeUpDigit = Object.assign({}, state[11], {isAddable: true});
          let stateClone = state.slice(0);

          stateClone[6] = threeOfAKindDigit;
          stateClone[7] = fourOfAKindDigit;
          stateClone[8] = fullHouseDigit;
          stateClone[11] = diceMeUpDigit;

          return stateClone;
        }

        case 'fullHouseValid': {
          let threeOfAKindDigit = Object.assign({}, state[6], {isAddable: true});
          let fullHouseDigit = Object.assign({}, state[8], {isAddable: true});
          let stateClone = state.slice(0);

          stateClone[6] = threeOfAKindDigit;
          stateClone[8] = fullHouseDigit;

          return stateClone;
        }

        case 'fourOfAKindValid': {
          let threeOfAKindDigit = Object.assign({}, state[6], {isAddable: true});
          let fourOfAKindDigit = Object.assign({}, state[7], {isAddable: true});
          let stateClone = state.slice(0);

          stateClone[6] = threeOfAKindDigit;
          stateClone[7] = fourOfAKindDigit;

          return stateClone;
        }

        case 'threeOfAKindValid': {
          let threeOfAKindDigit = Object.assign({}, state[6], {isAddable: true});
          let stateClone = state.slice(0);

          stateClone[6] = threeOfAKindDigit;
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
          if (digit.id <= 6 || digit.id === 13) {
            return Object.assign({}, digit, {value: value, added: true});
          } else {
            switch (digit.id) {
              case 7: {
                if (digit.isAddable) {
                  return Object.assign({}, digit, {value: value, added: true});
                } else {
                  return Object.assign({}, digit, {value: 0, added: true});
                }
              }
              case 8: {
                if (digit.isAddable) {
                  return Object.assign({}, digit, {value: value, added: true});
                } else {
                  return Object.assign({}, digit, {value: 0, added: true});
                }
              }
              case 9: {
                if (digit.isAddable) {
                  return Object.assign({}, digit, {value: 25, added: true});
                } else {
                  return Object.assign({}, digit, {value: 0, added: true});
                }
              }
              case 10: {
                if (digit.isAddable) {
                  return Object.assign({}, digit, {value: 30, added: true});
                } else {
                  return Object.assign({}, digit, {value: 0, added: true});
                }
              }
              case 11: {
                if (digit.isAddable) {
                  return Object.assign({}, digit, {value: 40, added: true});
                } else {
                  return Object.assign({}, digit, {value: 0, added: true});
                }
              }
              case 12: {
                if (digit.isAddable) {
                  return Object.assign({}, digit, {value: 50, added: true});
                } else {
                  return Object.assign({}, digit, {value: 0, added: true});
                }
              }
            }
          }
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
      let digits = state.map((digit) => {
        return Object.assign({}, digit, {
          disabled: false,
          isAddable: false
        });
      });
      return digits;
    }

    case DigitsActions.LOCKDIGIT: {
      return state.map((digit: Digit) => {
        if (digit.added) {
          return Object.assign({}, digit, {added: false, locked: true});
        }
        return digit;
      });
    }


    default: {
      return state;
    }
  }
}
