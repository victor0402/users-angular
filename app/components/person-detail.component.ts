import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';

import {Person}        from '../model/person';
import {PersonService} from '../services/person.service';

@Component({
    selector: 'my-person-detail',
    templateUrl: './app/templates/person-detail.component.html',
    styleUrls: ['./app/assets/css/person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
    @Input() person: Person;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    constructor(private personService: PersonService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.navigated = true;
                this.personService.getPerson(id)
                    .then(person => this.person = person);
            } else {
                this.navigated = false;
                this.person = new Person();
            }
        });
    }

    save() {
        this.personService
            .save(this.person)
            .then(person => {
                this.person = person; // saved person, w/ id if new
                this.goBack(person);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack(savedPerson: Person = null) {
        this.close.emit(savedPerson);
        if (this.navigated) {
            window.history.back();
        }
    }
}


