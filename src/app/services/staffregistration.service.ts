import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Staffregistration } from '../models/staffregistration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffregistrationService {
  serverurl="http://localhost:9000/sregistration"

  constructor(private http:HttpClient) { }
  getAll():Observable<Staffregistration[]>
  {
    return this.http.get<Staffregistration[]>(this.serverurl)
  }
  register(rs:Staffregistration):Observable<Staffregistration>
  {
    return this.http.post<Staffregistration>(this.serverurl,rs)
  }

  search (i:any):Observable<Staffregistration>
{
  return this.http.get<Staffregistration>(this.serverurl+"/"+i)
}

 del (i:any):Observable<any>{
    return this.http.delete(this.serverurl+"/"+i)
 }
 update(i:any,rs:Staffregistration):Observable<Staffregistration>{
  return this.http.put<Staffregistration>(this.serverurl+"/"+i,rs)
 }

 login(mno:any,ps:any):Observable<Staffregistration[]>
{
  return this.http.get<Staffregistration[]>(this.serverurl+"/"+mno+"/"+ps)
}


}


  

