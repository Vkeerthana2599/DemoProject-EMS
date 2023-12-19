import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EmployeeViewComponent } from './employee-view/employee-view.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeAddEditComponent,
    EmployeeViewComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDatepickerModule
  ]
})
export class EmployeeModule { }
