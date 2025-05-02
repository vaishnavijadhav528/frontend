import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patientrecord } from '../models/patientrecord';
import { PatientrecordService } from '../services/patientrecord.service';

@Component({
  selector: 'app-patientrecord',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './patientrecord.component.html',
  styleUrl: './patientrecord.component.css'
})
export class PatientrecordComponent implements OnInit {
  p: Patientrecord = new Patientrecord();
  pat: Patientrecord[] = [];

  constructor(private ps: PatientrecordService) {}

  ngOnInit(): void {
    this.fetchpat();
  }

  submitdata() {
    const nameRegex = /^[A-Za-z\s]+$/;
    const mobileRegex = /^[6-9][0-9]{9}$/;
    const villageRegex = /^[A-Za-z\s]+$/;
  
    if (!nameRegex.test(this.p.name)) {
      alert("Invalid name. Only letters and spaces are allowed.");
      return;
    }
  
    if (this.p.age <= 0) {
      alert("Age must be greater than 0.");
      return;
    }
  
    if (!mobileRegex.test(this.p.mobileno)) {
      alert("Invalid mobile number. It must be 10 digits and start with 6-9.");
      return;
    }
  
    if (!villageRegex.test(this.p.village)) {
      alert("Invalid village name. Only letters and spaces are allowed.");
      return;
    }
  
    this.ps.patientrec(this.p).subscribe((data) => {
      if (data != null) {
        alert("Patient record added successfully");
        this.fetchpat(); // refresh the list after adding
      }
    });
  }
  
  fetchpat() {
    this.ps.getAll().subscribe((data) => {
      if (data != null) {
        this.pat = data;
      }
    });
  }

  del(rn: any) {
    this.ps.del(rn).subscribe(() => {
      alert("Patient deleted");
      this.fetchpat(); // refresh list after deletion
    });
  }

  clearAllPatients() {
    if (confirm("Are you sure you want to delete all records?")) {
      const ids = this.pat.map(p => p.id);
      let count = 0;

      ids.forEach(id => {
        this.ps.del(id).subscribe(() => {
          count++;
          if (count === ids.length) {
            this.fetchpat(); // only refresh once all deletions are done
            alert("All records deleted.");
          }
        });
      });
    }
  }
}
