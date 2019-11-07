import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { MatDialog, MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA, MatSort } from '@angular/material';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns = ['fname', 'lname', 'gender', 'dob', 'dept'];

  dataSource: MatTableDataSource<EmployeeData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  Employees: EmployeeData[] = [];

  constructor( private employeeservice:EmployeeServiceService, public dialog: MatDialog ) {
      
  }

  ngOnInit(){
    this.employeeservice.getAllEmployees().subscribe((res:any) =>{
      this.Employees = res
      console.log('Result is =>',this.Employees)
      this.dataSource = new MatTableDataSource(this.Employees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  openblockDialog(){
		const dialogRef = this.dialog.open(AddEmployeeComponent, {
			width: '450px',
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
  }
  
}

export interface EmployeeData {
  id: string;
  fname: string;
  lname: string;
  gender: string;
  dob: string;
  dept: string;
}
