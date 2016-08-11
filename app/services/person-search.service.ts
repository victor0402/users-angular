import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';

import {Person}           from '../model/person';

@Injectable()
export class PersonSearchService {

    constructor(private http: Http) {
    }

    search(term: string) {
        return this.http
            .get(`https://usrs-api.herokuapp.com/api/v1/users?name=${term}`)
            .map((r: Response) => r.json() as Person[]);
    }
}


