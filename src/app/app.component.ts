import {Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'diceItUp!!';
  test;

  constructor(private _store: Store<AppState>,
              private cdRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this._store.select('login').subscribe((result: any) => {
      console.log(result);
      this.test = result.loggedIn + 'dei mudder';
      // this.cdRef.markforcheck();
    });

    // let textNode = document.createElement('h1');
    // let text = document.createTextNode('Hallo Welt!');
    // textNode.appendChild(text);
    // document.body.appendChild(textNode);

  }
}
