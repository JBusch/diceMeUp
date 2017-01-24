import {Component, OnInit, Input, ViewChild, SimpleChanges, ChangeDetectionStrategy} from '@angular/core';
import {Dice} from './dice.model';
import {DiceService} from "./../dices.service";
import {Store} from "@ngrx/store";
import {Digit} from "../../digits/digit/digit.model";
import {Observable} from "rxjs";
import {DiceActions} from "./dice.actions";
import {DigitActions} from "../../digits/digit/digit.actions";
import {DigitsActions} from "../../digits/digits.actions";
@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiceComponent implements OnInit {
  @Input() dice: Dice;

  constructor(private _store: Store<Dice>,
              private diceActions: DiceActions) {
  }

  ngOnInit() {
    console.log('init');

  }

  selectDice(dice) {
    this._store.dispatch(this.diceActions.selectDice(dice));
  }

  unSelectDice(dice) {
    this._store.dispatch(this.diceActions.unselectDice(dice));
  }
}
