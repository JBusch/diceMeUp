import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
  styleUrls: ['./digit.component.scss']
})
export class DigitComponent implements OnInit {

  @Input() digit;
  @Input() selectedDices;

  rolledDices: Dice[];

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
    // get current state
    this._store.take(1).subscribe((state) => {
      this.rolledDices = state.dices.resultDices;
    });


    let value: number = 0;
    this.rolledDices.forEach((dice) => {
      if (dice.activeSide === digit.id) {
        value += dice.activeSide;
      }
    });
    this._store.dispatch(this.digitActions.add(digit, value));
    this._store.dispatch(this.digitsActions.disable());
  }

}
