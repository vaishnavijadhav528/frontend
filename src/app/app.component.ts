import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbatComponent } from './navbat/navbat.component';
import { FooterComponent } from './footer/footer.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbatComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shri-datta-front';
}
