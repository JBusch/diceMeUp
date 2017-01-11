import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Dice} from "../dices/dice/dice.model";
import {CupActions} from "./cup.actions";

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.scss']
})
export class CupComponent implements OnInit {
  private title: string = 'Gameboard';
  dices$: Observable<Dice[]>;

  constructor(private _store: Store<any>,
              private cupActions: CupActions) {
    this.dices$ = this._store.select('dices').pluck('dices');
  }

  // constructor(private game: GameService,
  //             private dices: DiceService,
  //             private digit: DigitsService) {
  // }

  ngOnInit() {
  }

  rollDice() {
    this._store.dispatch(this.cupActions.ROLLDICE());
  }

}
