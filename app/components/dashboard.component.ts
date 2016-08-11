import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';

import {Person}        from '../model/person';
import {PersonService} from '../services/person.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/templates/dashboard.component.html',
    styleUrls: ['./app/assets/css/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    people: Person[] = [];

    constructor(private router: Router,
                private personService: PersonService) {
    }

    ngOnInit() {
        this.personService.getPeople()
            .then(people => this.people = people.slice(0, 25));
    }

    gotoDetail(person: Person) {
        let link = ['/detail', person.id];
        this.router.navigate(link);
    }
}
