import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Dice} from "../dices/dice/dice.model";

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.scss']
})
export class CupComponent implements OnInit {
  private title: string = 'Gameboard';
  dices$: Observable<Dice[]>;

  constructor(_store: Store<any>) {
    this.dices$ = _store.select('dices').pluck('dices');
  }

  // constructor(private game: GameService,
  //             private dices: DiceService,
  //             private digit: DigitsService) {
  // }

  ngOnInit() {
  }

}
