import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignationComponent } from './designation.component';
import { DesignationRoutingModule } from './designation-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { DesignationAddEditComponent } from './designation-add-edit/designation-add-edit.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { DsignationViewDetailsComponent } from './dsignation-view-details/dsignation-view-details.component';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [
DesignationComponent,
DesignationAddEditComponent,
DsignationViewDetailsComponent
  ],
  imports: [
    CommonModule,
    DesignationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatExpansionModule
  ]
})
export class DesignationModule { }
