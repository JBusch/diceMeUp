import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Dice} from "../dices/dice/dice.model";
import {Digit} from "../digits/digit/digit.model";
import {DigitsActions} from "../digits/digits.actions";
import {DigitsService, DigitsValidState} from "../digits/digits.service";

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  selectedDices$: Observable<Dice[]>;
  digits$: Observable<Digit[]>;
  digitSumUpper: number;
  digitSumLower: number;
  bonus: number;


  // digits service must be initialised at least one time, so that the subscription triggers.
  // ... which sucks....
  constructor(private _store: Store<Dice>,
              private digitsService: DigitsService) {
    this.selectedDices$ = _store.select('dices').pluck('resultDices');
    this.digits$ = _store.select('digits');

    this.digits$.subscribe((digits) => {
      this.digitSumUpper = digits.slice(0, 5).reduce((a, b: Digit, index) => {
        return a + b.value;
      }, 0);
      if (this.digitSumUpper >= 65) {
        this.bonus = 35;
      } else {
        this.bonus = 0;
      }

      this.digitSumLower = digits.slice(5, 14).reduce((a, b: Digit, index) => {
        return a + b.value;
      }, 0);
    });
  }

  ngOnInit() {
  }

}
