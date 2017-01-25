import {
  Component, OnInit, Input, ChangeDetectionStrategy,
  trigger,
  state,
  style,
  transition,
  animate, AfterViewInit, NgZone, ViewChild, ElementRef
} from '@angular/core';
import {Dice} from './dice.model';
import {Store} from "@ngrx/store";
import {DiceActions} from "./dice.actions";
@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // animations: [
  //   trigger('heroState', [
  //     state('inactive', style({
  //       backgroundColor: '#eee',
  //       transform: 'scale(1)'
  //     })),
  //     state('active', style({
  //       backgroundColor: '#cfd8dc',
  //       transform: 'scale(1.2)'
  //     })),
  //     transition('inactive => active', animate('100ms ease-in')),
  //     transition('active => inactive', animate('100ms ease-out'))
  //   ])
  // ]
})
export class DiceComponent implements AfterViewInit {
  @Input() dice: Dice;
  @ViewChild('domDice') domDice: ElementRef;
  // hero = {
  //   state: '',
  //   toggleState: function () {
  //
  //   }
  // };
  counter: number = 0;

  constructor(private _store: Store<Dice>,
              private diceActions: DiceActions,
              public ngZone: NgZone) {
    // this.hero.state = 'inactive';
    // this.hero.toggleState = () => {
    //   this.hero.state = 'active';
    // }

    // this.ngZone.runOutsideAngular(() => {
    //   foo() {
    //     if (this.counter < 5) {
    //       console.log(this.counter);
    //       this.counter++;
    //       this.dice.activeSide = this.dice.activeSide - this.counter;
    //       window.setTimeout(foo, 1000);
    //     }
    //   }
    // });
  }


  ngAfterViewInit() {
    console.log(this.domDice);
    // let player = this.domDice.nativeElement.animate([
    //   {transform: 'translate(' + -100 + 'px, ' + -100 + 'px)',},
    //   {transform: 'translate(' + this.dice.activeSide * 100 + 'px,' + this.dice.activeSide * 100 + 'px)'}
    //   // {transform: 'scale(' + 1 + ')', opacity: 1, offset: 0},
    //   // {transform: 'scale(.5)', opacity: .5, offset: .3},
    //   // {transform: 'scale(.667)', opacity: .667, offset: .7875},
    //   // {transform: 'scale(.6)', opacity: .6, offset: 1}
    // ], {
    //   duration: 700, //milliseconds
    //   easing: 'ease-in-out', //'linear', a bezier curve, etc.
    //   delay: 100, //milliseconds
    //   iterations: Infinity, //or a number
    //   direction: 'alternate', //'normal', 'reverse', etc.
    //   fill: 'forwards' //'backwards', 'both', 'none', 'auto'
    // });
    let elem = this.domDice,
      left = 0,
      lastFrame = +new Date,
      timer,
      counter = 1;

    timer = setInterval(() => {

      console.log(counter);
      let now = +new Date,
        deltaT = now - lastFrame;
      console.log(elem.nativeElement.classList, counter);
      elem.nativeElement.classList.remove('dice-show-' + (this.dice.activeSide));
      if (this.dice.activeSide + counter <= 6) {
        elem.nativeElement.classList.add('dice-show-' + 4);
      }

      // + (this.dice.activeSide + counter)
      // else {
      //   elem.nativeElement.classList.add('dice-show-' + (this.dice.activeSide - counter));
      // }

      lastFrame = now;
      // clear the timer at 400px to stop the animation
      counter++;
      if (counter > 5) {
        clearInterval(timer);
      }
    }, 500);

  }


  selectDice(dice) {
    this._store.dispatch(this.diceActions.selectDice(dice));
  }

  unSelectDice(dice) {
    this._store.dispatch(this.diceActions.unselectDice(dice));
  }
}
