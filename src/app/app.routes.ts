import {HomeComponent} from './home/home.component'
import {RouterModule, Routes} from "@angular/router";
import {GameComponent} from "./game/game.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginEmailComponent} from "./login-email/login-email.component";
import {AuthGuard} from "./services/auth-guard.service";
import {PlayerAreaComponent} from "./player-area/player-area.component";

export const RouteDefinitions: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'game',
    component: GameComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'player-area',
    component: PlayerAreaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'login/email',
    component: LoginEmailComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

// export default
