import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// EXTERNAL IMPORTS
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

// PROVIDERS IMPORTS
import { GameService } from './providers/game/game.service';
import { HttpService } from './providers/http/http.service';
import { PeopleService } from './providers/people/people.service';

// ROUTES IMPORT
import { APP_ROUTES } from './app.routes';

// COMPONENTS IMPORTS
import { AppComponent } from './app.component';
import { PeoplePickerComponent } from './components/people-picker/people-picker.component';
import { StartComponent } from './components/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    PeoplePickerComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
    RouterModule.forRoot(APP_ROUTES, {
      useHash: true
    }),
  ],
  providers: [
    GameService,
    HttpService,
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
