import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctorregistration } from '../models/doctorregistration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorregistrationService {
  serverurl="http://localhost:9000/dregistration"

  constructor(private http:HttpClient) { }
  getAll():Observable<Doctorregistration[]>
  {
    return this.http.get<Doctorregistration[]>(this.serverurl)
  }
  register(ds:Doctorregistration):Observable<Doctorregistration>
  {
    return this.http.post<Doctorregistration>(this.serverurl,ds)
  }

  search (i:any):Observable<Doctorregistration>
{
  return this.http.get<Doctorregistration>(this.serverurl+"/"+i)
}

 del (i:any):Observable<any>{
    return this.http.delete(this.serverurl+"/"+i)
 }
 update(i:any,ds:Doctorregistration):Observable<Doctorregistration>{
  return this.http.put<Doctorregistration>(this.serverurl+"/"+i,ds)
 }

 login(mno:any,ps:any):Observable<Doctorregistration[]>
{
  return this.http.get<Doctorregistration[]>(this.serverurl+"/"+mno+"/"+ps)
}

}
