import {
  Component, OnInit, Input, ViewChild, SimpleChanges, ElementRef, AfterViewInit,
  ChangeDetectionStrategy
} from '@angular/core';
import {Dice} from './dice/dice.model';
import {DiceService} from './dices.service';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs";
// import {GameService} from '../../services/game.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pluck';
import {DicesActions} from "./dices.actions";
import {DigitsActions} from "../digits/digits.actions";

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DicesComponent implements OnInit {
  @Input() dices: Dice[];

  constructor(private _store: Store<any>) {
  }

  ngOnChanges() {
  }

  // ngDoCheck() {
  //   this.dices$ = this.dices.getDiceCupDices();
  // }
  //
  ngOnInit() {

    // console.log(this.dices$.subscribe(dice => console.log(dice)));
    // this.dices$.map(state => state.dices).subscribe(dice => console.log(dice));
    // this.dices$ = this.dices.getDiceCupDices();
  }

  // increaseRollCount() {
  //   return this.game.increaseRollCount();
  // }

  // selectDice(dice) {
  //   this.dices.selectDice(dice);
  // }
  //
  // unSelectDice(dice) {
  //   this.dices.unSelectDice(dice);
  // }
  //
  // isDiceSelected(dice) {
  //   this.selectedDices.filter((element) => {
  //     return element.id === dice.id;
  //   });
  // }

  // ngAfterViewInit() {
  //   const hostElement = this.element.nativeElement;
  // }
}
