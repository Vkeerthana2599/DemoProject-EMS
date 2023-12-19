import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Designation } from 'src/app/models/designation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  baseUrl:string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.config.apiUrl+'/api//';
  }

  addDesignation(designation: Designation): Observable<Designation>{
    const designationUrl = this.baseUrl+'saveDesignation';
    return this.httpClient.post<Designation>(designationUrl,designation);
  }

  updateDesignation(id: string,designation: Designation ): Observable<Designation>{
    const designationUrl = this.baseUrl+'update/'+id;
    return this.httpClient.put<Designation>(designationUrl, designation);
  }

  fetchAllDesignations(): Observable<Designation[]>{
    const designationUrl = this.baseUrl+'fetch';
    return this.httpClient.get<Designation[]>(designationUrl);
  }

  fetchDesignationById(id: string):Observable<Designation>{
    const designationUrl = this.baseUrl+'fetchdesignation/'+id;
    return this.httpClient.get<Designation>(designationUrl);
  }

  deleteDesignation(id: string):Observable<any>{
    const desUrl=this.baseUrl+'deleteDes/'+id;
    return this.httpClient.delete(desUrl, { responseType: 'text' });
  }
}
