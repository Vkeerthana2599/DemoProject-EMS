import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/models/employee';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit {

  employee!: Employee;
  project!: Project;

  constructor(
    public _dailogRef: MatDialogRef<EmployeeViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee
  ) { }

 ngOnInit() {
  this.employee = this.data;
    console.log("Employee : ", this.employee);
  }
}
