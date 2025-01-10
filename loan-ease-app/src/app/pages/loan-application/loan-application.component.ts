import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiResponseModel, Application, Loan } from '../../model/application.model';
import { MasterService } from '../../service/master.service';

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

  masterService = inject(MasterService);
  
  constructor() { }

  addLoan() {
    this.application.Loans.push(JSON.parse(JSON.stringify(this.loan)));
    this.loan = new Loan();
  }

  onSubmit(){
    this.masterService.addNewApplication(this.application).subscribe((res:ApiResponseModel)=>{
      if(res.result){
        alert("Loan Application Success!!");
      } else {
        alert(res.message);
      }
    }, err=>{
      alert(err);
    });
  }
}
