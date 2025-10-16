import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Card } from '../../components/card/card';
import { HeroImgbg } from '../../components/hero-imgbg/hero-imgbg';
@Component({
  selector: 'app-about-us-page',
  imports: [Hero, Card, HeroImgbg],
  templateUrl: './about-us-page.html',
})
export default class AboutUsPage {
  itemsCard: CardInterface[] = [
    {
      icon: 'fa-solid fa-eye ',
      tittle: 'Full Transparency',
      description:
        'Clear processes, open communication, and shared metrics. Transparency is the foundation of every relationship with our clients and team members.',
    },
    {
      icon: 'fa-regular fa-heart',
      tittle: 'People Care',
      description:
        'We support every professional with ongoing feedback and growth plans. We believe success begins by taking care of our people.',
    },
    {
      icon: 'fa-solid fa-circle-check',
      tittle: 'Consistent Quality',
      description:
        'We apply rigorous selection, training, and supervision to ensure stable performance and high-level results.',
    },
    {
      icon: 'fa-solid fa-layer-group',
      tittle: 'True Flexibility',
      description:
        'We adapt teams to your needs without friction or complexity. Scale or adjust your operation whenever you need it.',
    },
    {
      icon: 'fa-solid fa-gears',
      tittle: 'Operational Efficiency',
      description:
        'We optimize every process to deliver fast, reliable results. Your time and resources are maximized without compromising quality.',
    },
    {
      icon: 'fa-solid fa-earth-americas',
      tittle: 'Global Talent, Local Connection',
      description:
        'We connect U.S. companies with Latin American talent, blending international standards with the warmth and dedication of our region.',
    },
  ];
}
