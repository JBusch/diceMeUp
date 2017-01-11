import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Dice} from "../dices/dice/dice.model";
import {Digit} from "../digits/digit/digit.model";

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  selectedDices$: Observable<Dice[]>;
  digits$: Observable<Digit[]>;

  constructor(private _store: Store<Dice>) {
    this.selectedDices$ = _store.select('dices').pluck('resultDices');
    this.digits$ = _store.select('digits');
  }

  ngOnInit() {
  }

}
