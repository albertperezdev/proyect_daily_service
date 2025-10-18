import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero-imgbg',
  imports: [],
  templateUrl: './hero-imgbg.html',
})
export class HeroImgbg {
  title = input.required<string>();
  titleSpan = input();
  description = input.required<string>();
}
