import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
// Import other components
import { CbseComponent } from './insideCard/cbse/cbse.component'; // Example component
import { SubjectInfoComponent } from './subject-info/subject-info.component'; 

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'cbse', component: CbseComponent },
  { path: 'cbse/:classId', component: CbseComponent },

  { path: 'cbse/subject-info', component: SubjectInfoComponent }
  // Add routes for other components
  // { path: 'sign-up', component: SignUpComponent },
  // { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
