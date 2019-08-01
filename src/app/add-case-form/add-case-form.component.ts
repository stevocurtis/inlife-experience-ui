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
  impacts = [ '1 - High', '2 - Medium', '3 - Low'];
  categories = [ 'Question', 'Issue', 'Feature', 'Feedback', 'Services Request'];

  model = new Case(1, 'Enter a short description', 'Web',  this.priorities[1],  'Sarah Smith', 'Protostar', this.impacts[2], this.categories[0], 'New' );

  submitted = false;

  onSubmit() {
  console.log('hello');
    this.submitted = true;
    this._caseService.submitCase(this.model).subscribe();
  }

  newCase() {
    this.model = new Case(1, '', '', '3 - Moderate', '', '', '', '', 'New');
    this.submitted = false;
  }

  get diagnostic() { return JSON.stringify(this.model); }

  constructor(private _caseService: CaseService) { }

  ngOnInit() {
  }

}
