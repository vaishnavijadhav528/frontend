import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  serverurl="http://localhost:9000/admin"

  constructor(private http:HttpClient) { }

  login(em:any,ps:any):Observable<Admin>
  {
    return this.http.get<Admin>(this.serverurl+"/"+em+"/"+ps)
  }
}
