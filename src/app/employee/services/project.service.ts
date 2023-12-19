import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Project } from 'src/app/models/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.config.apiUrl + '/api//';
  }

  createProject(project: Project): Observable<Project | string> {
    const projecturl = this.baseUrl + "saveProject";
    return this.httpClient.post<Project>(projecturl, project);
  }
updateProject(id: string,project: Project ): Observable<Project>{
  const projectUrl = this.baseUrl+'update/'+id;
  return this.httpClient.put<Project>(projectUrl, project);
}

fetchAllProjects(): Observable<Project[]>{
  const  projectUrl = this.baseUrl+'fetch';
  return this.httpClient.get<Project[]>(projectUrl);
}

fetchProjectById(id: string):Observable<Project>{
  const projectUrl = this.baseUrl+'fetchdesignation/'+id;
  return this.httpClient.get<Project>(projectUrl);
}

deleteProject(id: string):Observable<any>{
  const projectUrl = this.baseUrl+'deleteDes/'+id;
  return this.httpClient.delete(projectUrl, { responseType: 'text' });
}
}