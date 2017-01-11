import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DigitsService} from './../digits.service';
import {Store} from "@ngrx/store";
import {DigitActions} from "./digit.actions";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Digit} from "./digit.model";


@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss']
})
export class DigitComponent implements OnInit {

  @Input() digit;
  @Input() selectedDices;
  // digit$: Observable<any>;

  constructor(private digitService: DigitsService,
              private digitActions: DigitActions,
              private _store: Store<any>) {

    // this.digit$ = this._store.select('digit');
  }

  ngOnInit() {
  }

  @Output() digitUpdated = new EventEmitter();

  remove(digit): void {
    return this.digitService.remove(digit);
  }


  add(digit: Digit): void {
    this.selectedDices.subscribe((dices) => {
        let value: number = 0;
        dices.forEach((dice) => {
          if (dice.activeSide === digit.id) {
            value += dice.activeSide;
          }
        });
        digit.added = true;
        this._store.dispatch(this.digitActions.add(digit, value));
      }
    );
    console.log(digit);
  }

}
