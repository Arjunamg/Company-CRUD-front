import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Company } from './Company';




const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CompanyService {
  private api = 'http://localhost:3000/api/v1/companies/';
  //Companies :any[];
  constructor(private http: Http) { }

  getCompanies() {
    return this.http.get(this.api + 'get')
      .map(this.extractData)
      .catch(this.handleError);

  }

  addCompany(Company) {
    return this.http.post(this.api + 'create', Company, httpOptions)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getCompany(id){
    return this.http.get(this.api + 'get/'+id)
    .map(this.extractData)
    .catch(this.handleError);
  }

  updateCompany(id,company){
    return this.http.put(this.api+'update/'+id,company,httpOptions)
    .map(this.extractData)
    .catch(this.handleError);
  }

  deleteCompany(id){
    return this.http.delete(this.api+'delete/'+id,httpOptions)
    .map(this.extractData)
    .catch(this.handleError);
  }

  // addCompany(company):Observable<Company>{
  //   return this.http.post(this.api+'create',company,httpOptions)
  //   .map(this.extractData)
  //   .catch(this.handleError);
  // }


  private extractData(res: Response) {
    let body = res.json();
    return body;
  }


  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }

}
