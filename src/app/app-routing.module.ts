import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
// Import other components
import { CbseComponent } from './insideCard/cbse/cbse.component'; // Example component


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'cbse', component: CbseComponent }

  // Add routes for other components
  // { path: 'sign-up', component: SignUpComponent },
  // { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
