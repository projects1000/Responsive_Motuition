import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-cards',
  templateUrl: './subject-cards.component.html',
  styleUrls: ['./subject-cards.component.css']
})
export class SubjectCardsComponent implements OnInit {
  @Input() classId!: number; // Receive the classId as input

  subjects: any[] = []; // Array to hold subject data

  ngOnInit(): void {
    this.loadSubjects(); // Load subjects based on classId
  }

  loadSubjects() {
    // Mock data or service call to load subjects based on classId
    // Replace with actual data fetching logic
    this.subjects = [
      { name: 'Math', image: 'assets/bse.png' },
      { name: 'Science', image: 'assets/bse.png' },
      { name: 'English', image: 'assets/bse.png' },
      { name: 'History', image: 'assets/bse.png' }
    ];
  }
}
