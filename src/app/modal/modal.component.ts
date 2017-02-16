import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../app.reducers';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // changeDetection: ChangeDetectionStrategy.Default
})
export class ModalComponent implements OnInit {
  @Input() test;
  isShown: boolean = false;


  title: string;
  message: string;


  constructor(private _store: Store<AppState>,
              private cdRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this._store.select('login').subscribe((result: any) => {
      console.log(result);
      this.isShown = result.loggedIn;
      // this.cdRef.markforcheck();
    });

    // let textNode = document.createElement('h1');
    // let text = document.createTextNode('Hallo Welt!');
    // textNode.appendChild(text);
    // document.body.appendChild(textNode);

  }
}
