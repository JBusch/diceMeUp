import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {GameComponent} from './game/game.component';
import {BlockComponent} from './block/block.component';
import {HomeComponent} from './home/home.component';
import {RouteDefinitions} from './app.routes';
import {RouterModule} from "@angular/router";
import {DigitComponent} from './digits/digit/digit.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

// ngrx
import {StoreModule} from "@ngrx/store";
import {DigitActions} from "./digits/digit/digit.actions";
import {DigitsComponent} from "./digits/digits.component";
import {DigitsService} from "./digits/digits.service";
import {DicesComponent} from './dices/dices.component';
import {DiceComponent} from './dices/dice/dice.component';
import {DiceService} from "./dices/dices.service";
import {CupComponent} from './cup/cup.component';
import {dicesReducer} from "./dices/dices.reducer";
import {diceReducer} from "./dices/dice/dice.reducer";
import {DiceActions} from "./dices/dice/dice.actions";
import {ResultCupComponent} from "./result-cup/result-cup.component";
import {DicesActions} from "./dices/dices.actions";
import {digitsReducer} from "./digits/digits.reducer";
import {DigitsActions} from "./digits/digits.actions";
import {CupActions} from "./cup/cup.actions";
import {gameReducer} from "./game/game.reducer";
import {GameActions} from "./game/game.actions";

import {useLogMonitor, StoreLogMonitorModule} from '@ngrx/store-log-monitor';
import {DigitsCombinationsComponent} from "./digits-combinations/digits-combinations.component";
import {digitsCombinationsReducer} from "./digits-combinations/digits-combinations.reducer";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BlockComponent,
    HomeComponent,
    DigitsComponent,
    DigitComponent,
    DigitsCombinationsComponent,
    DicesComponent,
    DiceComponent,
    CupComponent,
    ResultCupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(RouteDefinitions),
    StoreModule.provideStore({
      dices: dicesReducer,
      dice: diceReducer,
      game: gameReducer,
      digits: digitsReducer,
      digitsCombinations: digitsCombinationsReducer
    }),
    // StoreDevtoolsModule.instrumentOnlyWithExtension()
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    StoreLogMonitorModule
  ],
  providers: [
    DigitActions,
    DigitsActions,
    DigitsService,
    DiceService,
    DiceActions,
    DicesActions,
    CupActions,
    GameActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
