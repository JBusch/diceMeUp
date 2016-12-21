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

  digits: Digit[] = [
    {
      id: 1,
      label: '1er',
      value: 0,
      added: false,
      locked: false
    },
    {
      id: 2,
      label: '2er',
      value: 0,
      added: false,
      locked: false
    },
    {
      id: 3,
      label: '3er',
      value: 0,
      added: false,
      locked: false
    },
    {
      id: 4,
      label: '4er',
      value: 0,
      added: false,
      locked: false
    },
    {
      id: 5,
      label: '5er',
      value: 0,
      added: false,
      locked: false
    },
    {
      id: 6,
      label: '6er',
      value: 0,
      added: false,
      locked: false
    }
  ];

  getDigits(): Digit[] {
    return this.digits;
  }

  addRound(): void {

  }

  getDigitsSum() {
    return this.digits.reduce((a, b) => {
      return a + b.value;
    }, 0);
  }

  /*

   add(digit): void {
   this.diceService.getSelectedDices().map((dice) => {
   if (dice.activeSide === digit.id) {
   digit.value += digit.id;
   }
   this.added = true;
   digit.added = true;
   });
   }
   */

  remove(digit): void {
    digit.value = 0;
    this.added = false;
    digit.added = false;
  }

  setLocked(digit) {
    digit.locked = true;
  }

  isLocked() {
    return this.isLocked();
  }

  lockDigits() {
    this.digits.forEach((digit) => {
      if (digit.added) {
        digit.locked = true;
      }
    });
  }


  isAdded() {
    return this.added;
  }

}
