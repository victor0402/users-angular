"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var person_service_1 = require('../services/person.service');
var PeopleComponent = (function () {
    function PeopleComponent(router, personService) {
        this.router = router;
        this.personService = personService;
        this.addingPerson = false;
    }
    PeopleComponent.prototype.getPeople = function () {
        var _this = this;
        this.personService
            .getPeople()
            .then(function (people) { return _this.people = people; })
            .catch(function (error) { return _this.error = error; });
    };
    PeopleComponent.prototype.addPerson = function () {
        this.addingPerson = true;
        this.selectedPerson = null;
    };
    PeopleComponent.prototype.close = function (savedPerson) {
        this.addingPerson = false;
        if (savedPerson) {
            this.getPeople();
        }
    };
    PeopleComponent.prototype.deletePerson = function (person, event) {
        var _this = this;
        event.stopPropagation();
        this.personService
            .delete(person)
            .then(function (res) {
            _this.people = _this.people.filter(function (h) { return h !== person; });
            if (_this.selectedPerson === person) {
                _this.selectedPerson = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    PeopleComponent.prototype.ngOnInit = function () {
        this.getPeople();
    };
    PeopleComponent.prototype.onSelect = function (person) {
        this.selectedPerson = person;
        this.addingPerson = false;
    };
    PeopleComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedPerson.id]);
    };
    PeopleComponent = __decorate([
        core_1.Component({
            selector: 'my-people',
            templateUrl: './app/templates/people.component.html',
            styleUrls: ['./app/assets/css/people.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, person_service_1.PersonService])
    ], PeopleComponent);
    return PeopleComponent;
}());
exports.PeopleComponent = PeopleComponent;
//# sourceMappingURL=people.component.js.map