import {Injectable} from '@angular/core';
import {Digit} from "./digit/digit.model";
import {Store} from "@ngrx/store";
import {Dice} from "../dices/dice/dice.model";
import {Observable} from "rxjs";
import {DigitsActions} from "./digits.actions";

export interface DigitsValidState {
  fullHouseValid: boolean;
  diceMeUpValid: boolean;
  fourOfAKindValid: boolean;
  threeOfAKindValid: boolean;
  smallStraightValid: boolean;
  largeStraightValid: boolean;
}


@Injectable()
export class DigitsService {
  selectedDices$: Observable < Dice[] >;
  digits$: Observable < Digit[] >;
  digitsValidState: DigitsValidState = {
    fullHouseValid: false,
    diceMeUpValid: false,
    fourOfAKindValid: false,
    threeOfAKindValid: false,
    smallStraightValid: false,
    largeStraightValid: false
  };

  constructor(private _store: Store<Dice>,
              private digitsActions: DigitsActions) {
    this.selectedDices$ = _store.select('dices').pluck('resultDices');
    this.digits$ = _store.select('digits');

    this.selectedDices$.subscribe((dices: Dice[]) => {
        if (dices.length === 5) {
          let roll = [0, 0, 0, 0, 0, 0];
          if (dices) {
            dices.forEach((dice) => {
              switch (dice.activeSide) {
                case 1:
                  roll[0]++;
                  break;
                case 2:
                  roll[1]++;
                  break;
                case 3:
                  roll[2]++;
                  break;
                case 4:
                  roll[3]++;
                  break;
                case 5:
                  roll[4]++;
                  break;
                case 6:
                  roll[5]++;
                  break;
                default:
                  break;
              }
            });


            if (!roll.some(value => value > 1)) {
              if (roll[0] === 0 || roll[5] === 0) {
                this._store.dispatch(this.digitsActions.toggleAddable('largeStraightValid'));
              } else {
                this._store.dispatch(this.digitsActions.toggleAddable('largeStraightInvalid'));
              }

              if (roll[4] === 0) {
                this._store.dispatch(this.digitsActions.toggleAddable('smallStraightValid'));
              }

            } else if (!roll.some(value => value > 2)) {
              if (roll[0] === 0 && roll[1] === 0 || roll[4] === 0 && roll[5] === 0 || roll[0] === 0 && roll[5] === 0) {
                this._store.dispatch(this.digitsActions.toggleAddable('smallStraightValid'));
              } else {
                this._store.dispatch(this.digitsActions.toggleAddable('noStraight'));
              }
            } else {
              this._store.dispatch(this.digitsActions.toggleAddable('noStraight'));
            }

            roll.sort(function (a, b) {
              return b - a;
            }).forEach((count: number, index) => {
              if (count === 5) {
                this._store.dispatch(this.digitsActions.toggleAddable('diceMeUpValid'));
              } else if (count === 4) {
                this._store.dispatch(this.digitsActions.toggleAddable('fourOfAKindValid'));
              } else if (count === 3 && roll[index + 1] === 2) {
                this._store.dispatch(this.digitsActions.toggleAddable('fullHouseValid'));
              } else if (count === 3 && roll[index + 1] !== 2) {
                this._store.dispatch(this.digitsActions.toggleAddable('threeOfAKindValid'));
              }
            });
          }
        }
        else {
          this._store.dispatch(this.digitsActions.resetAddable());
        }
      }
    );
  }

  getDigitsValidState(): DigitsValidState {
    return this.digitsValidState;
  }
}
