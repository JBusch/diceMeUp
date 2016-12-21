/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CupComponent } from './cup.component';

describe('CupComponent', () => {
  let component: CupComponent;
  let fixture: ComponentFixture<CupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
