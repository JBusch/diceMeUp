/* tslint:disable: member-ordering */
import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';


@Injectable()

export class GameActions {

  static ROLLDICE = '[Game] Roll Dices';

  ROLLDICE(): Action {
    return {
      type: GameActions.ROLLDICE
    };
  }

  static INCREMENTROUND = '[Game] Increment round';

  INCREMENTROUND(): Action {
    return {
      type: GameActions.INCREMENTROUND
    };
  }

  static INCREMENTROLLS = '[Game] Increment rolls';

  INCREMENTROLLS(): Action {
    return {
      type: GameActions.INCREMENTROLLS
    };
  }
}
