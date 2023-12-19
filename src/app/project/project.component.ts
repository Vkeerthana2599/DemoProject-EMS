import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../employee/services/project.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
})
export class ProjectComponent implements OnInit {

  // @Input() projectForm: FormGroup | undefined;
  projectForm: FormGroup; 

  constructor(
    private _fb: FormBuilder,
     private projectService: ProjectService,
     private _dialogRef: MatDialogRef<ProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.projectForm = this._fb.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    if(this.data){
      this.projectForm.patchValue(this.data);
    }
  }

  onFormSubmit() {
    if (this.projectForm.valid) {
      console.log(this.projectForm.value);
      const project: Project = {
        id: this.projectForm.value.id,
        name: this.projectForm.value.name,
        startDate: '',
        endDate: ''
      };
      console.log(project);
    if (this.data) {
        this.projectService
          .updateProject(this.data.id, project)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('project updated successfully');
              this._dialogRef.close(true);
      },
            error: (err: any) => {
              console.error(err);
       },
          });
      } else {
      this.projectService.createProject(project).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Project added successfully');
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error('Error in saving Project'+err.message);
        },
      });
    }
  }
  }
}

