/* tslint:disable: member-ordering */
import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Digit} from "./digit/digit.model";

@Injectable()

export class DigitsActions {

  static TOGGLEADDABLE = '[Digits] TOGGLEADDABLE';

  toggleAddable(condition: string): Action {
    return {
      type: DigitsActions.TOGGLEADDABLE,
      payload: condition
    };
  }

  static RESETADDABLE = '[Digits] RESETADDABLE';

  resetAddable(): Action {
    return {
      type: DigitsActions.RESETADDABLE,
    };
  }

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
