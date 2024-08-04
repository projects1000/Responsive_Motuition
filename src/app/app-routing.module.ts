// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
// import { SignUpComponent } from './sign-up/sign-up.component';  // Import your components
// import { LoginComponent } from './login/login.component';      // Import your components

const routes: Routes = [
  { path: '', component: WelcomeComponent }
  // { path: 'sign-up', component: SignUpComponent },
  // { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
