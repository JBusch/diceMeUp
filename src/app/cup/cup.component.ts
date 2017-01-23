import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Dice} from "../dices/dice/dice.model";
import {CupActions} from "./cup.actions";
import {GameActions} from "../game/game.actions";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import {DicesActions} from "../dices/dices.actions";
import {Digit} from "../digits/digit/digit.model";

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.scss']
})
export class CupComponent implements OnInit {
  private title: string = 'Gameboard';
  dices$: Observable<Dice[]>;
  dices: Dice[];
  rolledDices: Dice[];
  digits: Digit[];

  constructor(private _store: Store<any>,
              private cupActions: CupActions,
              private gameActions: GameActions,
              private dicesActions: DicesActions) {
    this.dices$ = this._store.select('dices').pluck('dices');
    //   .scan((acc: Dice[], cur: Dice[]) => {
    //   console.log(acc, cur);
    //   acc.forEach((dice, index) => {
    //     dice.activeSide = cur[index].activeSide;
    //   });
    //   return acc;
    // });


  }

  ngOnInit() {
  }

  checkDigitsComaptibility() {
    // this.rolledDices.
  }

  rollDice() {
    this._store.dispatch(this.dicesActions.ROLLDICE());
    this._store.dispatch(this.gameActions.INCREMENTROLLS());

    this._store.take(1).subscribe((state) => {
      this.rolledDices = state.dices.dices;
      this.digits = state.digits;
    });
  }

}
