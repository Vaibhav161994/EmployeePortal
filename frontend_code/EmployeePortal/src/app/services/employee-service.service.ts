import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private getAllEmployeesUrl = `${environment.url}/list`
  private createEmployeeUrl =`${environment.url}/create`

  constructor(private http:HttpClient) { }

  getAllEmployees(){
    return this.http.get<any>(this.getAllEmployeesUrl)
  }

  createEmployee(employee){
    return this.http.post(this.createEmployeeUrl,employee,{responseType:'text' as 'json'})
  }

}
