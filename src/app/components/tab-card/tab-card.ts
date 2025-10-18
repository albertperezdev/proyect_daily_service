import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tab-card',
  imports: [],
  templateUrl: './tab-card.html',
})
export class TabCard {
  img = input.required();
  title = input.required();
  description = input.required();
  keyWord = input.required();
}
