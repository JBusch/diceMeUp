import {Injectable} from '@angular/core';
import {Digit} from "./digit/digit.model";
// import {DiceService} from "./dice.service";
// import {Dice} from "./dice";

@Injectable()
export class DigitsService {
  added: boolean = false;

  constructor() {
    //private diceService: DiceService
  }

  // getDigits(): Digit[] {
  //   return this.digits;
  // }
  //
  // addRound(): void {
  //
  // }
  //
  // getDigitsSum() {
  //   return this.digits.reduce((a, b) => {
  //     return a + b.value;
  //   }, 0);
  // }
  //
  // remove(digit): void {
  //   digit.value = 0;
  //   this.added = false;
  //   digit.added = false;
  // }
  //
  // setLocked(digit) {
  //   digit.locked = true;
  // }
  //
  // isLocked() {
  //   return this.isLocked();
  // }
  //
  // lockDigits() {
  //   this.digits.forEach((digit) => {
  //     if (digit.added) {
  //       digit.locked = true;
  //     }
  //   });
  // }


  isAdded() {
    return this.added;
  }

}
