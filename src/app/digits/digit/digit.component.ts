import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DigitsService} from './../digits.service';
import {Store} from "@ngrx/store";
import {DigitActions} from "./digit.actions";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Digit} from "./digit.model";
import {DigitsActions} from "../digits.actions";


@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss']
})
export class DigitComponent implements OnInit {

  @Input() digit;
  @Input() selectedDices;

  dices;

  constructor(private digitsActions: DigitsActions,
              private digitActions: DigitActions,
              private _store: Store<any>) {

  }


  ngOnInit() {
    this.selectedDices.subscribe((dices) => {
      this.dices = dices;
    });
  }

  remove(digit): void {
    this._store.dispatch(this.digitActions.remove(digit));
    this._store.dispatch(this.digitsActions.enable());
  }

  add(digit: Digit): void {
    let value: number = 0;
    this.dices.forEach((dice) => {
        if (dice.activeSide === digit.id) {
          value += dice.activeSide;
        }

        this._store.dispatch(this.digitActions.add(digit, value));
        this._store.dispatch(this.digitsActions.disable());
      },
    );
  }

}
