import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero-imgbg',
  imports: [],
  templateUrl: './hero-imgbg.html',
})
export class HeroImgbg {
  backgroundImg = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}
