import { Component, OnInit } from '@angular/core';
import { Company } from './../../Company';
import { CompanyService } from './../../company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  constructor(private cService: CompanyService,
    private router: Router,
    private route: ActivatedRoute) { }
  company = new Company();

  ngOnInit() {
  }


  addCompany() {
    // this.company.name=company.name;
    // this.company.address=company.address;
    // this.company.city = company.city;
    //debugger
    this.cService.addCompany(this.company)
      .subscribe(() => this.goBack())
  }

  goBack() {
      this.router.navigate(['/company'])
  }

}
