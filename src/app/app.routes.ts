import { Routes } from '@angular/router';

import { StartComponent } from './components/start/start.component';
import { PeoplePickerComponent } from './components/people-picker/people-picker.component';

export const APP_ROUTES: Routes = [
  { path: '', component: StartComponent },
  { path: 'pick/people', component: PeoplePickerComponent }
];
