import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbat',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbat.component.html',
  styleUrl: './navbat.component.css'
})
export class NavbatComponent implements OnInit {
  constructor(private router:Router)
  {

  }
  usertype="guest"
    ngOnInit(): void {
      this.router.events.subscribe(()=>{
        if(localStorage.getItem("email")!=null)
          {
            this.usertype="user"
        }
        else if(localStorage.getItem("aemail")!=null)
        {
          this.usertype="admin"
        }
        else
        {
          this.usertype="user"
        }
      })
      

  }
  ulogout()
  {
    localStorage.removeItem("email")
    this.router.navigate(["/"])
  }
  alogout()
  {
    localStorage.removeItem("aemail")
    this.router.navigate(["/"])
  }
  
}
