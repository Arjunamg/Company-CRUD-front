import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from './../../company.service';
import { Company } from './../../Company';
import { CompanyComponent } from './../company.component';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  id: any;
  company= new Company();
  statusCode: number;
  constructor(
   // public ccomp:CompanyComponent,
    private cService: CompanyService,
    private router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCompany();
  }

  getCompany() {
    this._route.params.subscribe(params => {
      this.id = params.id;
      if (!this.id) {
        return;
      }
      this.cService.getCompany(this.id)
        .subscribe(company => {
          this.company = company
        },
          err => {
            this.statusCode = err;
          }
        )
    });

  }


  updateCompany(){
    this.cService.updateCompany(this.id,this.company)
    .subscribe(()=>this.goBack()
    );
    //this.ccomp.getCompaniesData();

  }


  goBack(){
    this.router.navigate(['/company'])
  }

}
