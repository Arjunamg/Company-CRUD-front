import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../Company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companyService: CompanyService) { }
  companies: Company[];
  ngOnInit() {
    this.getCompaniesData();
  }

  getCompaniesData() {
    this.companyService.getCompanies()
      .subscribe(
        companies => this.companies=companies
      );
  }

  deleteCompany(id){
    if(confirm("Are you sure you want to delete"+id)){
      this.companyService.deleteCompany(id)
      .subscribe(data=>this.getCompaniesData())
    }
   
  }

}
