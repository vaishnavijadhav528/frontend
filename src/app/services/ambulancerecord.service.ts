import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ambulancerecord } from '../models/ambulancerecord';

@Injectable({
  providedIn: 'root'
})
export class AmbulancerecordService {

  serverurl="http://localhost:4200/ambulancerecord"

  constructor(private http:HttpClient) { }
  getAll():Observable<Ambulancerecord[]>
  {
    return this.http.get<Ambulancerecord[]>(this.serverurl)
  }
  patient(a:Ambulancerecord):Observable<Ambulancerecord>
  {
    return this.http.post<Ambulancerecord>(this.serverurl,a)
  }

  search (i:any):Observable<Ambulancerecord>
{
  return this.http.get<Ambulancerecord>(this.serverurl+"/"+i)
}

 del (i:any):Observable<any>{
    return this.http.delete(this.serverurl+"/"+i)
 }
 update(i:any,a:Ambulancerecord):Observable<Ambulancerecord>{
  return this.http.put<Ambulancerecord>(this.serverurl+"/"+i,a)
 }
}
