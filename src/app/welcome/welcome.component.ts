import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  userName: string = '';
  userQuestion: string = '';
  isDialogOpen: boolean = false;
  cards = [
    { title: 'CBSE', description: 'CBSE Courses', imageSrc: 'assets/cbse.png', redirectUrl: '/cbse' },
    { title: 'ICSE', description: 'ICSE Courses', imageSrc: 'assets/icse.png', redirectUrl: '/icse' },
    { title: 'CHSE', description: 'CHSE Courses', imageSrc: 'assets/chse.png', redirectUrl: '/chse' },
    { title: 'BSE', description: 'BSE Courses', imageSrc: 'assets/bse.png', redirectUrl: '/bse' },
    { title: 'Tech', description: 'Tech Courses', imageSrc: 'assets/tech.png', redirectUrl: '/tech' },
    { title: 'NonTech', description: 'Non-Tech Courses', imageSrc: 'assets/nontech.png', redirectUrl: '/nontech' },
    { title: 'Pre School', description: 'Pre School Courses', imageSrc: 'assets/preschool.png', redirectUrl: '/preschool' },
    { title: 'Others', description: 'Other Courses', imageSrc: 'assets/others.png', redirectUrl: '/others' }
  ];

  constructor(private router: Router) {}

  navigateToSignUp() {
    this.router.navigate(['/sign-up']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  openModal() {
    this.isDialogOpen = true;
  }

  closeModal() {
    this.isDialogOpen = false;
  }

  submitQuestion() {
    console.log('Question submitted:', this.userQuestion);
    this.closeModal();
  }

  onCardClick(redirectUrl: string) {
    this.router.navigate([redirectUrl]);
  }
}
