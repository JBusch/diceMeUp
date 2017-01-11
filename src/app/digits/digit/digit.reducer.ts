// /* tslint:disable: no-switch-case-fall-through */
// import {Action} from '@ngrx/store';
//
// import {DigitActions} from './digit.actions';
// import {Digit} from './digit.model';
// import {startWith} from "rxjs/operator/startWith";
//
// export interface DigitState {
//   digit: Digit;
// }
//
// export const initialState: DigitState = {
//   digit: {
//     id: null,
//     label: null,
//     value: null,
//     added: null,
//     locked: null,
//     disabled: null
//   }
// };
//
//
// export function digitReducer(state = initialState, action: Action): DigitState {
//   switch (action.type) {
//
//     // case DigitActions.ADD: {
//     //   return Object.assign({}, state);
//     // }
//
//     /*case DigitActions.REMOVE: {
//      console.log(action, Object.assign({}, action.payload, {value: 0}));
//      return Object.assign({}, action.payload, {value: 0});
//      }*/
//
//     default: {
//       return state;
//     }
//   }
// }
//
