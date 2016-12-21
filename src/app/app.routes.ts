import {HomeComponent} from './home/home.component'
import {RouterModule, Routes} from "@angular/router";
import {GameComponent} from "./game/game.component";

export const RouteDefinitions: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'game',
    component: GameComponent
  }
];

// export default
