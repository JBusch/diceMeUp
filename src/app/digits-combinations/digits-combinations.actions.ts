/* tslint:disable: member-ordering */
import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {DigitCombinations} from "./digit-combinations.model";

@Injectable()

export class DigitsCombinationsActions {

  static DISABLE = '[DigitsCombinations] Disable';

  disable(): Action {
    return {
      type: DigitsCombinationsActions.DISABLE
    };
  }

  static ENABLE = '[DigitsCombinations] Enable';

  enable(): Action {
    return {
      type: DigitsCombinationsActions.ENABLE
    };
  }
}
