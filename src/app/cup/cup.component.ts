import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Dice} from "../dices/dice/dice.model";
import {CupActions} from "./cup.actions";
import {GameActions} from "../game/game.actions";
import 'rxjs/add/operator/map';
import {DicesActions} from "../dices/dices.actions";

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.scss']
})
export class CupComponent implements OnInit {
  private title: string = 'Gameboard';
  dices$: Observable<Dice[]>;
  dices: Dice[];

  constructor(private _store: Store<any>,
              private cupActions: CupActions,
              private gameActions: GameActions,
              private dicesActions: DicesActions) {
    this.dices$ = this._store.select('dices').pluck('dices');
  }

  ngOnInit() {
    this._store.select('dices').pluck('dices').subscribe((res) => {
      console.log('pluck', res);
    });
  }

  rollDice() {

    this._store.dispatch(this.dicesActions.ROLLDICE());
    this._store.dispatch(this.gameActions.INCREMENTROLLS());
  }

}
