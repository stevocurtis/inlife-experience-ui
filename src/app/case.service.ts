import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Case } from './case';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const server = 'http://xxx';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(private http: HttpClient) { }

  submitCase(theCase: Case): Observable<Case> {

    console.log(theCase);
    return this.http.post<Case>('http://localhost:3000/case/create', theCase, httpOptions);

  console.log('In submit case');
  //    let body = JSON.stringify({ short_description: "From app", channel: "Web", priority: "2 - Low" });
    //  console.log(body);
      //return this.http.post('http://localhost:3000/case/create', body, httpOptions);
  }
}
