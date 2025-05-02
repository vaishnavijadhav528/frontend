import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookappoinmentComponent } from './bookappoinment/bookappoinment.component';
import { EmergencyhelpComponent } from './emergencyhelp/emergencyhelp.component';
import { QualifieddoctorComponent } from './qualifieddoctor/qualifieddoctor.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MedicalComponent } from './medical/medical.component';
import { PatientregistrationComponent } from './patientregistration/patientregistration.component';
import { ServiceComponent } from './service/service.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AmbulancerecordComponent } from './ambulancerecord/ambulancerecord.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { PatientrecordComponent } from './patientrecord/patientrecord.component';
import { StaffloginComponent } from './stafflogin/stafflogin.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'service',component:ServiceComponent},
    {path:'emergencyhelp',component:EmergencyhelpComponent},
    {path:'qualifieddoctor',component:QualifieddoctorComponent},
    {path:'contact',component:ContactComponent},
    {path:'medical',component:MedicalComponent},
    {path:'bookappoinment',component:BookappoinmentComponent},
    {path:'patientregistration',component:PatientregistrationComponent},
    {path:'adminindex',component:AdminhomeComponent},
    {path:'ambulancerecord',component:AmbulancerecordComponent},
    {path:'doctorlogin',component:DoctorloginComponent},
    {path:'Patientrecord',component:PatientrecordComponent},
    {path:'Stafflogin',component:StaffloginComponent},
    {path:'Viewpatient',component:ViewpatientComponent},
    {path:'login',component:LoginComponent},
    {path:'logout',component:LogoutComponent},

];

