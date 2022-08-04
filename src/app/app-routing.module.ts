import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeCreateComponent} from "./employee-create/employee-create.component";
import {EmployeeUpdateComponent} from "./employee-update/employee-update.component";
import {EmployeeDetailsComponent} from "./employee-details/employee-details.component";

const routes: Routes = [
  {path: "employees", component: EmployeeListComponent},
  {path: "create-employee", component: EmployeeCreateComponent},
  {path: "update-employee/:id", component: EmployeeUpdateComponent},
  {path: "view-employee/:id", component: EmployeeDetailsComponent},
  {path: "", redirectTo: "employees", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
