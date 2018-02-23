import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from "./company/company.component";
import { AppComponent } from './app.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { EditCompanyComponent } from "./company/edit-company/edit-company.component";


const routes: Routes = [
     { path : '', redirectTo: '/company', pathMatch:'full'},
    //{ path: '', component: AppComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'company/add', component:AddCompanyComponent},
    { path: 'company/edit/:id', component:EditCompanyComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouteModule { }


