import { Designation } from './../../models/designation';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DesignationService } from '../service/designation.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-designation-add-edit',
  templateUrl: './designation-add-edit.component.html',
  styleUrls: ['./designation-add-edit.component.scss']
})
export class DesignationAddEditComponent implements OnInit{

  designationForm:FormGroup;

  constructor(
    private _fb: FormBuilder,
    private designatioService: DesignationService,
    private _dialogRef: MatDialogRef<DesignationAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private _coreService: CoreService
  ) {
    this.designationForm = this._fb.group({
      name: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    if(this.data){
      this.designationForm.patchValue(this.data);
    }
  }

  onFormSubmit() {
    if (this.designationForm.valid) {
      console.log(this.designationForm.value);
      const desig: Designation = {
        id: this.designationForm.value.id,
        name: this.designationForm.value.name
      };
      console.log(desig);
    if (this.data) {
        this.designatioService
          .updateDesignation(this.data.id, desig)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Designation updated successfully');
              this._dialogRef.close(true);
      },
            error: (err: any) => {
              console.error(err);
       },
          });
      } else {
      this.designatioService.addDesignation(desig).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Designation added successfully');
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error('Error in saving Designtion'+err.message);
        },
      });
    }
  }
 }
}
