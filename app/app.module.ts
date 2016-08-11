import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import {HttpModule, XHRBackend} from '@angular/http';

import {AppComponent}   from './components/app.component';
import {routing}        from './app.routing';

import {PeopleComponent}      from './components/people.component';
import {DashboardComponent}   from './components/dashboard.component';
import {PersonDetailComponent}  from './components/person-detail.component';
import {PersonSearchComponent}  from './components/person-search.component';

import {PersonService}  from './services/person.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        PeopleComponent,
        DashboardComponent,
        PersonDetailComponent,
        PersonSearchComponent
    ],
    providers: [
        PersonService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
