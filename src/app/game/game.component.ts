import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Game} from "./game.model";
import {Observable} from "rxjs";
import {GameActions} from "./game.actions";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/distinctUntilChanged";
import {Dice} from "../dices/dice/dice.model";
import {DigitsActions} from "../digits/digits.actions";
import {DicesActions} from "../dices/dices.actions";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game$;
  selectedDices$: Observable<Dice[]>;

  constructor(private _store: Store<any>,
              private gameActions: GameActions,
              private digitsActions: DigitsActions,
              private dicesActions: DicesActions) {
    this.game$ = this._store.select('game');
    this.selectedDices$ = _store.select('dices').pluck('resultDices');
  }

  ngOnInit() {
  }

  rollDice() {
    this._store.dispatch(this.dicesActions.ROLLDICE());
    this._store.dispatch(this.gameActions.INCREMENTROLLS());

    // this._store.take(1).subscribe((state) => {
    //   this.rolledDices = state.dices.dices;
    //   this.digits = state.digits;
    // });
  }


  nextRound(): void {
    this._store.dispatch(this.gameActions.INCREMENTROUND());
    this._store.dispatch(this.digitsActions.lock());
    this._store.dispatch(this.digitsActions.enable());
  }

}
