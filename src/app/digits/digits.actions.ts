/* tslint:disable: member-ordering */
import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Digit} from "./digit/digit.model";

@Injectable()

export class DigitsActions {

  static DISABLE = '[Digits] Disable';

  disable(): Action {
    return {
      type: DigitsActions.DISABLE
    };
  }

  static ENABLE = '[Digits] Enable';

  enable(): Action {
    return {
      type: DigitsActions.ENABLE
    };
  }
}
