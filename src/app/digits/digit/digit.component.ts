import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DigitsService} from './../digits.service';
import {Store} from "@ngrx/store";
import {DigitActions} from "./digit.actions";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss']
})
export class DigitComponent implements OnInit {

  @Input() digit;
  digit$: Observable<any>;

  constructor(private digitService: DigitsService,
              private digitActions: DigitActions,
              private _store: Store<any>) {

    this.digit$ = this._store.select('digit');
  }

  ngOnInit() {
  }

  @Output() digitUpdated = new EventEmitter();

  /* add(digit): void {
   return this.digitService.add(digit);
   }*/

  remove(digit): void {
    return this.digitService.remove(digit);
  }

  increment(digit): void {
    this._store.dispatch(this.digitActions.increment(digit));
  }

}
