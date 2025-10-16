import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
})
export class Hero {
  title = input.required();
  description = input.required();
  img = input.required();
}
