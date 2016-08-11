import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';
import {Observable}        from 'rxjs/Observable';
import {Subject}           from 'rxjs/Subject';

import {PersonSearchService} from '../services/person-search.service';
import {Person} from '../model/person';

@Component({
    selector: 'person-search',
    templateUrl: './app/templates/person-search.component.html',
    styleUrls: ['./app/assets/css/person-search.component.css'],
    providers: [PersonSearchService]
})
export class PersonSearchComponent implements OnInit {
    people: Observable<Person[]>;
    private searchTerms = new Subject<string>();

    constructor(private personSearchService: PersonSearchService,
                private router: Router) {
    }

    // Push a search term into the observable stream.
    search(term: string) {
        this.searchTerms.next(term);
    }

    ngOnInit() {
        this.people = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.personSearchService.search(term)
                // or the observable of empty people if no search term
                : Observable.of<Person[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Person[]>([]);
            });
    }

    gotoDetail(person: Person) {
        let link = ['/detail', person.id];
        this.router.navigate(link);
    }
}


