import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageSrc: string = '';
  @Input() redirectUrl: string = ''; // Add this input property
  @Output() cardClick = new EventEmitter<string>(); // Emit the URL

  onCardClick() {
    this.cardClick.emit(this.redirectUrl);
  }
}
