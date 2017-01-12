import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DigitsService} from './../digits.service';
import {Store} from "@ngrx/store";
import {DigitActions} from "./digit.actions";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import {Digit} from "./digit.model";
import {DigitsActions} from "../digits.actions";


@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss']
})
export class DigitComponent implements OnInit {

  @Input() digit;
  @Input() selectedDices;

  dices;

  constructor(private digitsActions: DigitsActions,
              private digitActions: DigitActions,
              private _store: Store<any>) {
    // this.dices = this._store.select('dices');
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
      this.dices = state.dices.resultDices;
    });


    let value: number = 0;
    this.dices.forEach((dice) => {
      if (dice.activeSide === digit.id) {
        console.log('act', dice);
        value += dice.activeSide;
      }
    });
    console.log('add', this.dices, value);

    this._store.dispatch(this.digitActions.add(digit, value));
    this._store.dispatch(this.digitsActions.disable());
  }

}
