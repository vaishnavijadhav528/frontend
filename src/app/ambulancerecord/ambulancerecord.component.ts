import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Ambulancerecord } from '../models/ambulancerecord';
import { AmbulancerecordService } from '../services/ambulancerecord.service';

@Component({
  selector: 'app-ambulancerecord',
  imports: [FormsModule,CommonModule],
  templateUrl: './ambulancerecord.component.html',
  styleUrl: './ambulancerecord.component.css'
})
export class AmbulancerecordComponent {
  a:Ambulancerecord=new Ambulancerecord()
  constructor(private as:AmbulancerecordService) 
  {

  }
  submitdata(){{
    this.as.patient(this.a).subscribe((data)=>{
      if(data!=null)
        alert("patient record succesfull")
    })
  }


}
}
