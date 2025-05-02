import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Doctorregistration } from '../models/doctorregistration';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DoctorregistrationService } from '../services/doctorregistration.service';

@Component({
  selector: 'app-doctorlogin',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './doctorlogin.component.html',
  styleUrl: './doctorlogin.component.css'
})
export class DoctorloginComponent {
 dl:Doctorregistration=new Doctorregistration()
   constructor(private ds:DoctorregistrationService,private router:Router)
   {
 
   }
  
   submitdata(form: any) {
    // Check if the form is valid before submitting
    if (form.valid) {
      this.ds.register(this.dl).subscribe((data) => {
        if (data != null) {
          alert("Registration successful");
          this.router.navigate(['/Patientrecord']);
        }
      });
    } else {
      alert("Please fill all fields correctly before submitting.");
    }
  }

  submitdataa(from:any) {
    const mobilePattern = /^[6-9][0-9]{9}$/;
    const passwordPattern = /^[A-Z][A-Za-z0-9@#$%^&+=!]*[0-9]+.*[@#$%^&+=!]+.*$/;
  
    if (!mobilePattern.test(this.dl.mobileno)) {
      alert("Invalid mobile number. It must start with 6–9 and be exactly 10 digits.");
      return;
    }
  
    if (!passwordPattern.test(this.dl.password)) {
      alert("Invalid password. It must start with a capital letter, include at least one digit and one special character.");
      return;
    }
  
    this.ds.login(this.dl.mobileno, this.dl.password).subscribe((data) => {
      if (data.length > 0) {
        alert("Login successful");
        localStorage.setItem("mobileno", this.dl.mobileno);
        this.router.navigate(['/Viewpatient']);
      } else {
        alert("Invalid mobile number or password");
      }
    });
  }
  
}
