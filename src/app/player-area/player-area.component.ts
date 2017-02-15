import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable} from "angularfire2"

@Component({
  selector: 'app-player-area',
  templateUrl: './player-area.component.html',
  styleUrls: ['./player-area.component.scss']
})
export class PlayerAreaComponent implements OnInit {

  name: any;
  state: string = '';

  users$;

  constructor(public af: AngularFire,
              private router: Router) {
    this.users$ = af.database;


    // this.af.auth.subscribe(auth => {
    //   if (auth) {
    //     console.log(auth);
    //     console.log(<FirebaseObjectObservable<any>>this.users$.object('users'));
    //     this.users$.object('users/' + auth.uid).set({name: 'Hoche', age: 22});
    //     this.users$.object('users/' + auth.uid).subscribe(user => {
    //       console.log(user.$exists());
    //       this.name = user.name;
    //     });
    //     console.log(this.name);
    //   }
    // });

  }

  logout() {
    this.af.auth.logout();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }


  goToSignIn() {
    this.router.navigateByUrl('/signup');
  }

  ngOnInit() {
    // console.log(this.users$);
    // this.users$.subscribe(user => console.log(user));
  }

}
