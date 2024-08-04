import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  cards = [
    { title: 'CBSE', description: 'CBSE Courses', imageSrc: 'assets/cbse.png' },
    { title: 'ICSE', description: 'ICSE Courses', imageSrc: 'assets/icse.png' },
    { title: 'CHSE', description: 'CHSE Courses', imageSrc: 'assets/chse.png' },
    { title: 'BSE', description: 'BSE Courses', imageSrc: 'assets/bse.png' },
    { title: 'Tech', description: 'Tech Courses', imageSrc: 'assets/tech.png' },
    { title: 'NonTech', description: 'Non-Tech Courses', imageSrc: 'assets/nontech.png' },
    { title: 'Pre School', description: 'Pre School Courses', imageSrc: 'assets/preschool.png' },
    { title: 'Others', description: 'Other Courses', imageSrc: 'assets/others.png' },
  ];

  constructor(private router: Router) {}

  navigateToSignUp() {
    this.router.navigate(['/sign-up']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
