import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { College } from './college';
@Injectable()
export class CollegeService {
    constructor(private http: Http) {}

    addCollege(college: College) {
        const body = JSON.stringify(college);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost/college/add', body, options);

    }
}
