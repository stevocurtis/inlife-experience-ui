import { Component, OnInit } from '@angular/core';
import { CaseService } from '../case.service';
import { Case } from '../case';

@Component({
  selector: 'app-add-case-form',
  templateUrl: './add-case-form.component.html',
  styleUrls: ['./add-case-form.component.css']
})

export class AddCaseFormComponent implements OnInit {

  priorities = [ '2 - Low', '3 - Moderate' ];

  model = new Case(1, 'This is a case from an angular app', 'Web', this.priorities[1] );

  submitted = false;

  onSubmit() {
  console.log('hello');
    this.submitted = true;
    this._caseService.submitCase(this.model).subscribe();
  }

  newCase() {
    this.model = new Case(1, '', '', '');
  }

  get diagnostic() { return JSON.stringify(this.model); }

  constructor(private _caseService: CaseService) { }

  ngOnInit() {
  }

}
