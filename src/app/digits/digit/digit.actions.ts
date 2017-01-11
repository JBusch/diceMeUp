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


  static ADD = '[Digit] Increment Add';

  add(digit: Digit, value: number): Action {
    return {
      type: DigitActions.ADD,
      payload: Object.assign({}, digit, digit.value = value)
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
