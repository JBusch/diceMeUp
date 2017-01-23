import {Component, OnInit, Input, ViewChild, SimpleChanges, ChangeDetectionStrategy} from '@angular/core';
import {Dice} from './dice.model';
import {DiceService} from "./../dices.service";
import {Store} from "@ngrx/store";
import {Digit} from "../../digits/digit/digit.model";
import {Observable} from "rxjs";
import {DiceActions} from "./dice.actions";
import {DigitActions} from "../../digits/digit/digit.actions";
import {DigitsActions} from "../../digits/digits.actions";
@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiceComponent implements OnInit {
  @Input() dice: Dice;
  selectedDices$: Observable<Dice[]>;
  fullHouseValid: boolean;
  diceMeUpValid: boolean;
  fourOfAKindValid: boolean;
  threeOfAKindValid: boolean;
  smallStraightValid: boolean;
  largeStraightValid: boolean;


  constructor(private dices: DiceService,
              private _store: Store<Dice>,
              private diceActions: DiceActions,
              private digitsActions: DigitsActions) {

  }


  @ViewChild('domDice') domDice;


  ngOnInit() {
    console.log('init');

  }

  ngAfterViewInit() {
    // console.log(this.domDice);
    // this.domDice.nativeElement.className = 'dice-' + this.dice.id;
    // this.dices.initialRoll(this.domDice);
    // this.domDice.nativeElement.className = `dice-container dice-${this.dice.id} dice-show-${this.dice.activeSide}`;
    // console.log('dome', this.dice);
  }

  selectDice(dice) {
    this._store.dispatch(this.diceActions.SELECTDICE(dice));
  }

  unSelectDice(dice) {
    this._store.dispatch(this.diceActions.UNSELECTDICE(dice));
  }

  // ngDoCheck() {
  //   console.log(this.dice);
  // }
  //
  // ngOnChanges() {
  //   console.warn('changed');
  // }

  // ngOnInit() {
  //   // console.log(this.dice);
  // }

}
