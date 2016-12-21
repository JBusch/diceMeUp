import {Injectable} from '@angular/core';
import {Dice} from "./dice/dice.model";

@Injectable()
export class DiceService {
  selectedDices: Dice[] = [];

  constructor() {
  }

  // dices: Dice[] = [
  //   {
  //     id: 1,
  //     activeSide: 1,
  //     selected: false
  //   },
  //   {
  //     id: 2,
  //     activeSide: 1,
  //     selected: false
  //   },
  //   {
  //     id: 3,
  //     activeSide: 1,
  //     selected: false
  //   },
  //   {
  //     id: 4,
  //     activeSide: 1,
  //     selected: false
  //   }, {
  //     id: 5,
  //     activeSide: 1,
  //     selected: false
  //   }
  // ];

  // getFreshDiceCup(): void {
  //   this.selectedDices.length = 0;
  //   this.dices = [
  //     {
  //       id: 1,
  //       activeSide: 1,
  //       selected: false
  //     },
  //     {
  //       id: 2,
  //       activeSide: 1,
  //       selected: false
  //     },
  //     {
  //       id: 3,
  //       activeSide: 1,
  //       selected: false
  //     },
  //     {
  //       id: 4,
  //       activeSide: 1,
  //       selected: false
  //     }, {
  //       id: 5,
  //       activeSide: 1,
  //       selected: false
  //     }
  //   ];
  // }

  /*getDiceCupDices(): Dice[] {
   return this.dices;
   }

   getSelectedDices(): Dice[] {
   return this.selectedDices;
   }

   rollDices() {
   this.dices.map((dice: any) => {
   dice.activeSide = (Math.floor(Math.random() * 6) + 1);
   });
   }

   selectDice(dice) {
   console.dir(dice);
   if (this.selectedDices.indexOf(dice) === -1) {
   dice.selected = true;
   this.selectedDices.push(dice);
   }
   let index = this.dices.indexOf(dice);
   this.dices.splice(index, 1);
   }

   unSelectDice(dice) {
   if (this.selectedDices.indexOf(dice) !== -1) {
   let index = this.selectedDices.indexOf(dice);
   this.selectedDices.splice(index, 1);
   dice.selected = false;

   // add dice back into dice cup
   this.dices.splice(dice.id - 1, 0, dice);
   }
   }

   selectAll() {
   this.dices.forEach((dice) => {
   dice.selected = true;
   this.selectedDices.splice(dice.id - 1, 0, dice);
   });
   this.dices.length = 0;
   }

   unSelectAll() {
   this.selectedDices.forEach((dice) => {
   dice.selected = false;
   this.dices.splice(dice.id - 1, 0, dice);
   });
   this.selectedDices.length = 0;
   }*/
}
