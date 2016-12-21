import {Component, OnInit} from '@angular/core';
import {Digit} from "./digit/digit.model";
import {DigitsService} from "./digits.service";

@Component({
  selector: 'app-digits',
  templateUrl: './digits.component.html',
  styleUrls: ['./digits.component.scss']
})
export class DigitsComponent implements OnInit {
  digits: Digit[];

  constructor(private digitsService: DigitsService) {
  }

  ngOnInit() {
    this.digits = this.digitsService.getDigits();
  }

}
