import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee/employee";
import {EmployeeService} from "../employee/employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  employee: Employee = new Employee();
  id!: number;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: value => {this.employee = value},
      error: err => {console.log(err)}
    }
    );

    // Deprecated -- used observer object {}

    // this.employeeService.getEmployeeById(this.id).subscribe(
    //   // data => {this.employee = data},
    //   // error => console.log(error)
    // );
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe({
      next: data => {
        this.goToEmployeeList();
      },
      error: err => {console.log(err)}
      }
    );
  }

  goToEmployeeList(){
    this.router.navigate(["/employees"]);
  }
}
