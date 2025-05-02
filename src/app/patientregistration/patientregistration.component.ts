import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Patientregistration } from '../models/patientregistration';
import { PatientregistrationService } from '../services/patientregistration.service';



@Component({
  selector: 'app-patientregistration',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './patientregistration.component.html',
  styleUrl: './patientregistration.component.css'
})
export class PatientregistrationComponent {
  r:Patientregistration=new Patientregistration()
  constructor(private rs:PatientregistrationService,private router:Router)
  {

  }
  submitdata(regForm: any) {
    if (regForm.valid) {
      this.rs.register(this.r).subscribe((data) => {
        if (data != null) {
          alert("Registration successful");
          this.router.navigate(['/bookappoinment']);
        }
      });
    } else {
      alert("Please fill the form correctly before submitting.");
    }
  }
  
  

  submitdataa(loginForm: any) {
    if (loginForm.invalid) {
      alert("Please enter valid mobile number and password.");
      return;
    }
  
    this.rs.login(this.r.mobileno, this.r.password).subscribe((data) => {
      if (data.length > 0) {
        alert("Login successful");
        localStorage.setItem("mobileno", this.r.mobileno);
        this.router.navigate(['/bookappoinment']);
      } else {
        alert("Invalid mobile number or password");
      }
    });
  }
  
}


 

