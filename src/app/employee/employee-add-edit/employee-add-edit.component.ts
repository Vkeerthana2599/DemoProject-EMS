import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoreService } from 'src/app/core/core.service';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/models/employee';
import { Project } from 'src/app/models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.scss']
})
export class EmployeeAddEditComponent implements OnInit {

  employeeForm: FormGroup;
  allProject: Project[]=[];
  projects: any[] = [];


  constructor(
    private _fb: FormBuilder,
    private _coreService: CoreService,
    private employeeService: EmployeeService,
    private projectService: ProjectService,
    private _dialogRef: MatDialogRef<EmployeeAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public employee: Employee,
  ) {
    this.employeeForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', Validators.required],
      qualification: ['', Validators.required],
      experience: ['', Validators.required],
      address: ['', Validators.required],
      designation: '',
      projectName:'',
      startDate:'',
      endDate:'',
      gender: '',
      project: ['', Validators.required]
    });
  }

  ngOnInit(): void {}
  
  addProject(){
    let project = this.employeeForm.value;
    this.projects.push({
      projectName:project?.projectName,
      startDate: project?.startDate,
      endDate: project?.endDate
    });
    console.log(this.projects);
    this.employeeForm.patchValue({
      projectName:'',
      startDate:'',
      endDate:'',
    })
  }

  // compareObjects(obj1: any, obj2: any): boolean {
  //   return obj1 && obj2 && obj1.id === obj2.id;
  // }
  onFormSubmit() {
    if (this.employeeForm.valid) {
       if (this.employee) {
        this.employeeService.updateEmployee(this.employeeForm.value, this.employee.id)
          .subscribe({
            next: (value: Employee) => {
              this._coreService.openSnackBar("Employee updated successfully");
              this._dialogRef.close(true);
              this.employeeService.viewAllEmployees();
            }, error: (err: any) => {
              this._coreService.openSnackBar("Couldn't update employee");
              console.log(err.message);
            }
          });
        }
         else {
        this.employeeService.createEmployee(this.employeeForm.value).subscribe({
          next: (employee: Employee | string) => {
            console.log(employee);
            this._coreService.openSnackBar("Employee saved successfully");
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            let errorMessage: string;
            if (err.error && typeof err.error === 'string') {
              errorMessage = err.error;
            } else if (err.error && err.error.message) {
              errorMessage = err.error.message;
            } else {
              errorMessage = 'An error occurred. Please try again.';
            }
            this._coreService.openSnackBar("Couldn't save employee");
            console.error(errorMessage);
          }
        });
      }
    } 
  }
}

function phoneValidator(control: any, AbstractControl: any) {
  throw new Error('Function not implemented.');
}
