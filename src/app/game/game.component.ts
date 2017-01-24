import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Game} from "./game.model";
import {Observable} from "rxjs";
import {GameActions} from "./game.actions";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import "rxjs/add/operator/distinctUntilChanged";
import {Dice} from "../dices/dice/dice.model";
import {DigitsActions} from "../digits/digits.actions";
import {DicesActions} from "../dices/dices.actions";
import {DiceActions} from "../dices/dice/dice.actions";
import {Digit} from "../digits/digit/digit.model";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game$: Observable<Game>;
  selectedDices$: Observable<Dice[]>;
  digits$: Observable<Digit[]>;
  isAddedDigit: boolean;

  constructor(private _store: Store<any>,
              private gameActions: GameActions,
              private digitsActions: DigitsActions,
              private dicesActions: DicesActions,
              private diceActions: DiceActions) {
    this.game$ = this._store.select('game');
    this.selectedDices$ = this._store.select('dices').pluck('resultDices');
    this.digits$ = this._store.select('digits');
  }

  ngOnInit() {
    this.digits$.subscribe((digits: Digit[]) => {
      this.isAddedDigit = digits.some((digit: Digit) => digit.added);
    });
  }

  rollDice() {
    this._store.dispatch(this.dicesActions.rollDice());
    this._store.dispatch(this.gameActions.INCREMENTROLLS());
  }

  selectAll() {
    this._store.dispatch(this.diceActions.selectAllDice());
  }

  nextRound(): void {
    this._store.dispatch(this.gameActions.INCREMENTROUND());
    this._store.dispatch(this.digitsActions.lock());
    this._store.dispatch(this.digitsActions.enable());
    this._store.dispatch(this.dicesActions.resetDice());
  }
}
