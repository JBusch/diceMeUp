import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Game} from "./game.model";
import {Observable} from "rxjs";
import {GameActions} from "./game.actions";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/distinctUntilChanged";
import {Dice} from "../dices/dice/dice.model";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game$;

  constructor(private _store: Store<any>,
              private gameActions: GameActions) {
    this.game$ = this._store.select('game');

  }

  ngOnInit() {
  }

  nextRound(): void {
    this._store.dispatch(this.gameActions.INCREMENTROUND())
  }

}
