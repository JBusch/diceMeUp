import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(private af: AngularFire,
              private router: Router) {
    // this.af.auth.subscribe(auth => {
    //   if (auth) {
    //     this.router.navigateByUrl('/game');
    //   }
    // });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }
}
