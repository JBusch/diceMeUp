/* tslint:disable: member-ordering */
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Action} from '@ngrx/store';

import {Digit} from './digit.model';

@Injectable()

export class DigitActions {

  static REMOVE = '[Digit] Remove Digit';

  /*REMOVE(digit: Digit): Action {
    return {
      type: DigitActions.REMOVE,
      payload: Object.assign({}, digit, digit.value++)
    };
  }

  remove(digit): void {
    digit.value = 0;
    this.added = false;
    digit.added = false;
  }

  setLocked(digit) {
    digit.locked = true;
  }*/


  static INCREMENT = '[Digit] Increment Digit';

  increment(digit: Digit): Action {
    return {
      type: DigitActions.INCREMENT,
      payload: Object.assign({}, digit, digit.value++)
    };
  }

  static DECREMENT = '[Digit] Decrement Digit';

  decrement(digit: Digit): Action {
    return {
      type: DigitActions.DECREMENT,
      payload: Object.assign({}, digit, digit.value--)
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
