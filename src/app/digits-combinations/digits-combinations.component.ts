import {Component, OnInit} from '@angular/core';
import {DigitsCombinations} from "./digits-combinations.model";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Dice} from "../dices/dice/dice.model";

@Component({
  selector: 'app-digits-combinations',
  templateUrl: './digits-combinations.component.html',
  styleUrls: ['./digits-combinations.component.scss']
})
export class DigitsCombinationsComponent implements OnInit {
  digitsCombinations$: Observable<DigitsCombinations[]>;
  isDigitCombinationAdded: boolean;
  selectedDices$: Observable<Dice[]>;

  constructor(private _store: Store<any>) {
    this.selectedDices$ = _store.select('dices').pluck('resultDices');
  }

  ngOnInit() {
    this.digitsCombinations$ = this._store.select('digitsCombinations');
  }

}
