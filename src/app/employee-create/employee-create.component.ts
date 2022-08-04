import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee/employee";
import {EmployeeService} from "../employee/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe({
        next: value => {
          console.log(value);
          this.goToEmployeeList();
        },
        error: err => console.log(err)
      }
    );
  }

  /*
  can also create method this way - deprecated

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( value => {
          console.log(value);
          this.goToEmployeeList();
        },
        error: err => console.log(err));
   }
   */

  goToEmployeeList(){
    this.router.navigate(["/employees"]);
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
}
