import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patientregistration } from '../models/patientregistration';

@Injectable({
  providedIn: 'root'
})
export class PatientregistrationService {
  serverurl="http://localhost:9000/registration"

  constructor(private http:HttpClient) { }
  getAll():Observable<Patientregistration[]>
  {
    return this.http.get<Patientregistration[]>(this.serverurl)
  }
  register(r:Patientregistration):Observable<Patientregistration>
  {
    return this.http.post<Patientregistration>(this.serverurl,r)
  }

  search (i:any):Observable<Patientregistration>
{
  return this.http.get<Patientregistration>(this.serverurl+"/"+i)
}

 del (i:any):Observable<any>{
    return this.http.delete(this.serverurl+"/"+i)
 }
 update(i:any,r:Patientregistration):Observable<Patientregistration>{
  return this.http.put<Patientregistration>(this.serverurl+"/"+i,r)
 }

 login(mno:any,ps:any):Observable<Patientregistration[]>
{
  return this.http.get<Patientregistration[]>(this.serverurl+"/"+mno+"/"+ps)
}


}

