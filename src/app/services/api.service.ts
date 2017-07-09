import { Konsult } from './../interfaces/consult';
import { Needs } from './../interfaces/needs';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getConsultantList() {
    return this.http.get('assets/test/consult.json')
      .map(response => response.json() as Konsult[]);
  }

  getNeedsList() {
    return this.http.get('assets/test/needs.json')
      .map(response => response.json() as Needs[]);
  }
}
