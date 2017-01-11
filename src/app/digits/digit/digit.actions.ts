/* tslint:disable: member-ordering */
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Action} from '@ngrx/store';

import {Digit} from './digit.model';

@Injectable()

export class DigitActions {

  static REMOVE = '[Digit] Remove Digit';

  remove(digit: Digit): Action {
    return {
      type: DigitActions.REMOVE,
      payload: Object.assign({}, digit)
    };
  }


  static ADD = '[Digit] Add Digit';

  add(digit: Digit, value: number): Action {
    return {
      type: DigitActions.ADD,
      payload: {digit, value}
    };
  }

  static RESET = '[Digit] Reset Digit';

  reset(digit: Digit): Action {
    return {
      type: DigitActions.RESET,
      payload: Object.assign({}, digit, digit.value = 0)
    };
  }
}
