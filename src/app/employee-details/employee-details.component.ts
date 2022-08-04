import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../employee/employee";
import {EmployeeService} from "../employee/employee.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private router: Router, private employeeService: EmployeeService, private route: ActivatedRoute) { }

  employee!: Employee;
  id!: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: value => {this.employee =value},
      error: err => {console.log(err)}
    });
  }


  backToList() {
    this.router.navigate(["employees"]);
  }
}
