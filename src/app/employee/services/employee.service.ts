import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Designation } from 'src/app/models/designation';
import { Employee } from 'src/app/models/employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.config.apiUrl + '/api//';
  }

  createEmployee(employee: Employee): Observable<Employee | string> {
    const employeeUrl = this.baseUrl + "saveemployee";
    return this.httpClient.post<Employee>(employeeUrl, employee);

  }

  updateEmployee(employee: Employee, employeeId: string): Observable<Employee> {
    const employeeUrl = this.baseUrl + "updateemployee/" + employeeId;
    return this.httpClient.put<Employee>(employeeUrl, employee);
  }

  viewAllEmployees(): Observable<Employee[]> {
    const employeeUrl = this.baseUrl + "fetchallemployees";
    return this.httpClient.get<Employee[]>(employeeUrl);
  }

  deleteEmployee(employeeId: string): Observable<string> {
    const employeeUrl = this.baseUrl + "deleteemployee/" + employeeId;
    console.log(this.httpClient.delete<string>(employeeUrl));
    return this.httpClient.delete<string>(employeeUrl);
  }
} 