import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';

import {Person}                from '../model/person';
import {PersonService}         from '../services/person.service';

@Component({
    selector: 'my-people',
    templateUrl: './app/templates/people.component.html',
    styleUrls: ['./app/assets/css/people.component.css']
})
export class PeopleComponent implements OnInit {
    people: Person[];
    selectedPerson: Person;
    addingPerson = false;
    error: any;

    constructor(private router: Router,
                private personService: PersonService) {
    }

    getPeople() {
        this.personService
            .getPeople()
            .then(people => this.people = people)
            .catch(error => this.error = error);
    }

    addPerson() {
        this.addingPerson = true;
        this.selectedPerson = null;
    }

    close(savedPerson: Person) {
        this.addingPerson = false;
        if (savedPerson) {
            this.getPeople();
        }
    }

    deletePerson(person: Person, event: any) {
        event.stopPropagation();
        this.personService
            .delete(person)
            .then(res => {
                this.people = this.people.filter(h => h !== person);
                if (this.selectedPerson === person) {
                    this.selectedPerson = null;
                }
            })
            .catch(error => this.error = error);
    }

    ngOnInit() {
        this.getPeople();
    }

    onSelect(person: Person) {
        this.selectedPerson = person;
        this.addingPerson = false;
    }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedPerson.id]);
    }
}


