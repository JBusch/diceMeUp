/* tslint:disable: member-ordering */
import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Digit} from "./digit/digit.model";

@Injectable()

export class DigitsActions {

  static ADD = '[Digits] Increment Add';

  add(digit: Digit, value: number): Action {
    return {
      type: DigitsActions.ADD,
      payload: Object.assign({}, digit, digit.value = value)
    };
  }

  static RESET = '[Digits] Reset Digit';

  reset(digit: Digit): Action {
    return {
      type: DigitsActions.RESET,
      payload: Object.assign({}, digit, digit.value = 0)
    };
  }
}
