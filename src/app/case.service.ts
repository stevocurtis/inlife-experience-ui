import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Case } from './case';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const server = 'http://xxx';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(private http:HttpClient) { }

  submitCase() {
      let body = JSON.stringify({ short_description: "From app", channel: "Web", priority: "2 - Low" });
      return this.http.post(server + 'digico-aws-test/snow/case', body, httpOptions);
  }
}
