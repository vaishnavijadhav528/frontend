import { Injectable } from '@angular/core';
import { Patientrecord } from '../models/patientrecord';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientrecordService {

  serverurl="http://localhost:9000/patientrecord"

  constructor(private http:HttpClient) { }
  getAll():Observable<Patientrecord[]>
  {
    return this.http.get<Patientrecord[]>(this.serverurl)
  }
  patientrec(p:Patientrecord):Observable<Patientrecord>
  {
    return this.http.post<Patientrecord>(this.serverurl,p)
  }

  search (i:any):Observable<Patientrecord>
{
  return this.http.get<Patientrecord>(this.serverurl+"/"+i)
}

 del (i:any):Observable<any>{
    return this.http.delete(this.serverurl+"/"+i)
 }
 update(i:any,p:Patientrecord):Observable<Patientrecord>{
  return this.http.put<Patientrecord>(this.serverurl+"/"+i,p)
 }
 


}
