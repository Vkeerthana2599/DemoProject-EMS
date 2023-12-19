import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Designation } from 'src/app/models/designation';

@Component({
  selector: 'app-dsignation-view-details',
  templateUrl: './dsignation-view-details.component.html',
  styleUrls: ['./dsignation-view-details.component.scss']
})
export class DsignationViewDetailsComponent implements OnInit {

  dg!: Designation;

  constructor(
    public _dialogRef:MatDialogRef<DsignationViewDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.dg = this.data;
  }







}
