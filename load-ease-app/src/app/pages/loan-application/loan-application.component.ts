import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Application, Loan } from '../../model/application.model';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {
  application: Application = new Application();
  loan: Loan = new Loan();

  constructor() { }

  addLoan() {
    this.application.Loans.push(JSON.parse(JSON.stringify(this.loan)));
  }
}
