import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent{

  employeeForm: FormGroup;

  maxDate:any = new Date();

  dateFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6 ;
  }
  constructor(private formBuilder: FormBuilder, private router:Router, private service:EmployeeServiceService, public dialog: MatDialog, private _toast:ToastrService) {
    this.createemployeeForm();
  }

  myFilter(d: Date): boolean {
		const day = d.getDay();
    const month = d.getMonth();
		const todays_date = d.getDate();
		const todaysDateObject = new Date();
		const today = todaysDateObject.getDate();
    const actualMonth = todaysDateObject.getMonth();
    console.log(todays_date)

    	/** Prevent actual system date from being selected.*/
    if (month < actualMonth && todays_date < today) {
      return false;
    } else if (day !== 0 && day !== 6) {
      return true;
    } else {
      return false;
    }
  }

  createemployeeForm(){
    this.employeeForm = this.formBuilder.group({
      fname:[''],
      lname:[''],
      gender:[''],
      dob:[''],
      dept:['']
    });
  }

  genders:Gender []= [{ value:'Male', viewValue:'M'},{ value:'Female', viewValue:'F'}]

  onSubmit() {
      console.log('Your form data is : ', this.employeeForm.value);
      this.service.createEmployee(this.employeeForm.value).subscribe((res:any) =>{
        this._toast.success(res)
        window.location.reload()
      },
      (err:any) => {
        this._toast.error('Unable to Add Employee')
      })
  }

  close(){
    this.dialog.closeAll()
  }

}

export interface Gender {
  value: string;
  viewValue: string;
}
