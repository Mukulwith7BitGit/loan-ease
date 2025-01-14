import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loanPrincipleAmount: number | null = null;
  loanAnnualInterest: number | null = null;
  loanTermInMonths: number | null = null;
  emiAmount: number | null = null;

  calculateLoan() {
    if (
      this.loanPrincipleAmount !== null &&
      this.loanAnnualInterest !== null &&
      this.loanTermInMonths !== null &&
      this.loanPrincipleAmount > 0 &&
      this.loanAnnualInterest > 0 &&
      this.loanTermInMonths > 0
    ) {
      let monthlyInterestRate = this.loanAnnualInterest / 12 / 100;
      this.emiAmount =
        (this.loanPrincipleAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -this.loanTermInMonths));
    } else {
      this.emiAmount = 0; // Reset if input values are invalid
      alert('Please fill out all fields with valid numbers.');
      // this.closeCalculateLoanModal();
    }
  }

  // closeCalculateLoanModal() {

  //   // Close the modal programmatically
  //   let modalElement = document.getElementById('calculateLoanModal');
  //   if (modalElement) {
  //     let modalInstance = new bootstrap.Modal(modalElement);
  //     modalInstance.hide();
  //   }
  // }

  resetData() {
    this.loanPrincipleAmount = null;
    this.loanAnnualInterest = null;
    this.loanTermInMonths = null;
    this.emiAmount = null;
  }
}
