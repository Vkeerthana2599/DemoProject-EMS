import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Designation } from '../models/designation';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DesignationService } from './service/designation.service';
import { MatDialog } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { DesignationAddEditComponent } from './designation-add-edit/designation-add-edit.component';
import { DsignationViewDetailsComponent } from './dsignation-view-details/dsignation-view-details.component';


@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements OnInit {
  displayedColumns: string[]=['name', 'action'];
  dataSource!:MatTableDataSource<Designation>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  designationList: Designation[] = [];

  constructor(private designationService: DesignationService,
    private _dialog: MatDialog,
    private _coreService: CoreService){}

  ngOnInit(): void {
    this.fetchAllDesignations();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openAddEditDesignationForm() {
    const dialogRef = this._dialog.open(DesignationAddEditComponent, {disableClose: true});
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.fetchAllDesignations();
        }
      },
    });
  }

  fetchAllDesignations(){
    this.designationService.fetchAllDesignations().subscribe({
      next: data =>{
        this.designationList =data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: err=>{
        console.log("unable to fetch the Designations  " +err);

      }
    });
  }

  deleteUserRole(id: string){
    this.designationService.deleteDesignation(id).subscribe({
     next: (data:any)=> {
        alert("Designation Deleted");
        this.fetchAllDesignations();
      },
     error: (error: any)=> {
        console.log("Error in deleting the user role."+ error);
      }
 });
}

openEditForm(data: any) {
  const dialogRef = this._dialog.open(DesignationAddEditComponent, {
    data, disableClose: true
  });

  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.fetchAllDesignations();
      }
    },
  });
}

viewDetails(data : any){
  console.log(data);
  const view = this._dialog.open(DsignationViewDetailsComponent,{
    data, disableClose: true,
  });
}
}
