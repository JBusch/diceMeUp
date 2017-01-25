import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Store} from "@ngrx/store";
import {DigitActions} from "./digit.actions";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import {Digit} from "./digit.model";
import {DigitsActions} from "../digits.actions";
import {Dice} from "../../dices/dice/dice.model";


@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigitComponent implements OnInit {

  @Input() digit;
  @Input() selectedDices;

  chosenDices: Dice[];

  constructor(private digitsActions: DigitsActions,
              private digitActions: DigitActions,
              private _store: Store<any>) {
  }


  ngOnInit() {

  }

  remove(digit): void {
    this._store.dispatch(this.digitActions.remove(digit));
    this._store.dispatch(this.digitsActions.enable());
  }

  add(digit: Digit): void {
    console.log('add');
    // get current state
    this._store.take(1).subscribe((state) => {
      this.chosenDices = state.dices.resultDices;
    });

    let value: number = 0;
    this.chosenDices.forEach((dice) => {
      console.log(dice);
      if (digit.id <= 6 && dice.activeSide === digit.id) {
        value += dice.activeSide;
      } else if (digit.id > 6) {
        console.log(value);
        value += dice.activeSide;
      }
    });
    this._store.dispatch(this.digitActions.add(digit, value));
    this._store.dispatch(this.digitsActions.disable());
  }

}
