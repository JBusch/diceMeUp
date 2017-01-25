import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Dice} from "../dices/dice/dice.model";

@Component({
  selector: 'app-result-cup',
  templateUrl: 'result-cup.component.html',
  styleUrls: ['result-cup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultCupComponent implements OnInit {
  dices$: Observable<Dice[]>;

  constructor(_store: Store<any>) {
    this.dices$ = _store.select('dices').pluck('resultDices');
  }

  ngOnInit() {
  }

}
