import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Dice} from "../dices/dice/dice.model";
import {Digit} from "../digits/digit/digit.model";
import {DigitsActions} from "../digits/digits.actions";

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  selectedDices$: Observable<Dice[]>;
  digits$: Observable<Digit[]>;
  digitSumUpper: number;
  digitSumLower: number;
  bonus: number;
  fullHouseValid: boolean;
  diceMeUpValid: boolean;
  fourOfAKindValid: boolean;
  threeOfAKindValid: boolean;
  smallStraightValid: boolean;
  largeStraightValid: boolean;


  constructor(private _store: Store<Dice>,
              private digitsActions: DigitsActions) {
    this.selectedDices$ = _store.select('dices').pluck('resultDices');
    this.digits$ = _store.select('digits');

    this.selectedDices$.subscribe((dices: Dice[]) => {
      console.log('subs');
      let roll = [0, 0, 0, 0, 0, 0];
      if (dices.length === 5) {
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
        }

        if (!roll.some(value => value > 1)) {
          if (roll[0] === 0 || roll[5] === 0) {
            this.largeStraightValid = true;
            this._store.dispatch(this.digitsActions.toggleAddable('largeStraightValid'));
          }
        } else if (!roll.some(value => value > 2)) {
          if (roll[0] === 0 && roll[1] === 0 || roll[4] === 0 && roll[5] === 0 || roll[0] === 0 && roll[5] === 0) {
            this.smallStraightValid = true;
            console.log('small valid');
          }
        }

        roll.sort(function (a, b) {
          return b - a;
        }).forEach((count: number, index) => {
          if (count === 5) {
            this.diceMeUpValid = true;
            this.fourOfAKindValid = true;
            this.threeOfAKindValid = true;
            this.fullHouseValid = true;
          } else if (count === 4) {
            this.fourOfAKindValid = true;
          } else if (count === 3 && roll[index + 1] === 2) {
            this.threeOfAKindValid = true;
            this.fullHouseValid = true;
          } else if (count === 3 && roll[index + 1] !== 2) {
            this.threeOfAKindValid = true;
          } else if (roll[5] === 0) {
            this.largeStraightValid = true;

          }
        });
      } else {
        this._store.dispatch(this.digitsActions.resetAddable());
      }


    });


    this.digits$.subscribe((digits) => {
      this.digitSumUpper = digits.slice(0, 5).reduce((a, b: Digit, index) => {
        return a + b.value;
      }, 0);
      if (this.digitSumUpper >= 65) {
        this.bonus = 35;
      } else {
        this.bonus = 0;
      }

      this.digitSumLower = digits.slice(5, 14).reduce((a, b: Digit, index) => {
        return a + b.value;
      }, 0);
    });
  }

  ngOnInit() {
  }

}
