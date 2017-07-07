import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getConsultantList() {
    return this.http.get('assets/test/consult.json')
      .map(response => response.json());
  }
}
