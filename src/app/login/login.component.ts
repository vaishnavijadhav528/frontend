import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Admin } from '../models/admin';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  r:Admin=new Admin()
  constructor(private rs:AdminService,private router:Router)
  {

  }
  submitdataa()
  {
    this.rs.login(this.r.email,this.r.password).subscribe((data)=>{

      if(data!=null)
        {
          alert("alert sucessful")
          localStorage.setItem("aemail",this.r.email)
         this.router.navigate(['/'])
          
          }
          else{
            alert("invalid email and password")
          }
    })
}
}
