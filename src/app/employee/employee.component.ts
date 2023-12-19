import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { Component, Inject, Injectable, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { EmployeeService } from './services/employee.service';
import { Employee } from '../models/employee';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  displayedColumns: string[] = ["name","gender", "email", "designation", "qualification", "experience","phoneNo", "actions"];
  dataSource!: MatTableDataSource<Employee>;
  employeesList: Employee[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _coreService: CoreService,
    private employeeService: EmployeeService,
    private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchAllEmployees();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  fetchAllEmployees() {
    this.employeeService.viewAllEmployees().subscribe({
      next: (employees) => {
        this.employeesList = employees;
        this.dataSource = new MatTableDataSource(employees);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error(err) {
        console.log("Unable to fetch all employees " + err.message);
      }
    });
  }

  openEmployeeAddForm() {
    const dialogRef = this._dialog.open(EmployeeAddEditComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.fetchAllEmployees();
        }
      }
    });

  }

  viewEmployee(employee: Employee) {
    this._dialog.open(EmployeeViewComponent, { data: employee, disableClose: true });
  }

  openEditForm(employeeData: any) {
    const dialogRef = this._dialog.open(EmployeeAddEditComponent, { data: employeeData, disableClose: true });

    dialogRef.afterClosed().subscribe({
      next: (employee: Employee) => {
        if (employee) {
          this.fetchAllEmployees();
        }
      }
    });
  }

  deleteEmployee(id: string){
    this.employeeService.deleteEmployee(id).subscribe({
     next: (data:any)=> {
        alert("Employee Deleted");
        this._coreService.openSnackBar(data);
        this.fetchAllEmployees();
      },
     error: (error: any)=> {
        console.log("Error in deleting the user role."+ error);
        this._coreService.openSnackBar(error.message);
      }
    });
  }
}