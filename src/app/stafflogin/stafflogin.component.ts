import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Staffregistration } from '../models/staffregistration';
import { StaffregistrationService } from '../services/staffregistration.service';

@Component({
  selector: 'app-stafflogin',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './stafflogin.component.html',
  styleUrl: './stafflogin.component.css'
})
export class StaffloginComponent {
  ss:Staffregistration=new Staffregistration()
  s1:Staffregistration=new Staffregistration()

  constructor(private rs:StaffregistrationService,private router:Router)
  {

  }
  submitdata(form: any) {
    // Check if the form is valid before submitting
    if (form.valid) {
      this.rs.register(this.ss).subscribe((data) => {
        if (data != null) {
          alert("Registration successful");
          this.router.navigate(['/Patientrecord']);
        }
      });
    } else {
      alert("Please fill all fields correctly before submitting.");
    }
  }
  

  submitdataa(form: any) {
    const mobilePattern = /^[6-9][0-9]{9}$/;
    const passwordPattern = /^[A-Z][A-Za-z0-9@#$%^&+=!]*[0-9]+.*[@#$%^&+=!]+.*$/;
  
    if (!mobilePattern.test(this.s1.mobileno)) {
      alert("Invalid mobile number. It must be 10 digits and start with 6–9.");
      return;
    }
  
    if (!passwordPattern.test(this.s1.password)) {
      alert("Invalid password. It must start with a capital letter, include at least one digit and one special character.");
      return;
    }
  
    // If all validations pass
    this.rs.login(this.s1.mobileno, this.s1.password).subscribe((data) => {
      if (data.length > 0) {
        alert("Login successful");
        localStorage.setItem("mobileno", this.s1.mobileno);
        this.router.navigate(['/Patientrecord']);
      } else {
        alert("Invalid mobile number or password");
      }
    });
  }
  
}
