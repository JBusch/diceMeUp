import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Game} from "./game.model";
import {Observable} from "rxjs";
import {GameActions} from "./game.actions";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/distinctUntilChanged";
import {Dice} from "../dices/dice/dice.model";
import {DigitsActions} from "../digits/digits.actions";

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
              private digitsActions: DigitsActions) {
    this.game$ = this._store.select('game');
    this.selectedDices$ = _store.select('dices').pluck('resultDices');
  }

  ngOnInit() {
  }

  nextRound(): void {
    this._store.dispatch(this.gameActions.INCREMENTROUND());
    this._store.dispatch(this.digitsActions.lock());
    this._store.dispatch(this.digitsActions.enable());
  }

}
