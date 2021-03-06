import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Digit} from "./digit/digit.model";
import {DigitsService} from "./digits.service";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Dice} from "../dices/dice/dice.model";

@Component({
  selector: 'app-digits',
  templateUrl: './digits.component.html',
  styleUrls: ['./digits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigitsComponent implements OnInit {

  digits$: Observable<Digit[]>;
  isDigitAdded: boolean;
  selectedDices$: Observable<Dice[]>;

  constructor(private _store: Store<Dice>,
              private digitsService: DigitsService) {
    this.selectedDices$ = _store.select('dices').pluck('resultDices');
  }

  ngOnInit() {
    this.digits$ = this._store.select('digits');
  }

}
