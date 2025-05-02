import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Patientrecord } from '../models/patientrecord';
import { PatientrecordService } from '../services/patientrecord.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewpatient',
  imports: [CommonModule],
  templateUrl: './viewpatient.component.html',
  styleUrl: './viewpatient.component.css'
})
export class ViewpatientComponent implements OnInit{

patarr:Patientrecord[]=[]
constructor(private ps:PatientrecordService)
{

}
ngOnInit(): void {
  this.fetchpatient()
}

fetchpatient()
{
   this .ps.getAll().subscribe(data=>{
    if(data!=null)
    {
      this.patarr=data
     
    }
   })
}

}
