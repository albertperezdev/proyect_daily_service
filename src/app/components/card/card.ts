import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
})
export class Card {
  tittle = input.required<string>();
  description = input.required<string>();
  icon = input.required<string>();
}
