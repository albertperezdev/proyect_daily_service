import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Card } from '../../components/card/card';
import { HeroImgbg } from '../../components/hero-imgbg/hero-imgbg';
import { Tabs } from '../../components/tabs/tabs';
import { CardsImg } from '../../components/cards-img/cards-img';
@Component({
  selector: 'app-about-us-page',
  imports: [Hero, Card, Tabs, CardsImg, HeroImgbg],
  templateUrl: './about-us-page.html',
})
export default class AboutUsPage {
  itemsCard: CardInterface[] = [
    {
      icon: 'fa-solid fa-people-arrows ',
      tittle: 'Customer service specialists',
      description: 'Trained in international communication standards',
    },
    {
      icon: 'fa-solid fa-chart-simple',
      tittle: 'Digital marketing experts',
      description: 'Creative professionals who drive online growth',
    },
    {
      icon: 'fa-solid fa-headset',
      tittle: 'Technical support team',
      description: 'Skilled IT professionals solving complex challenges',
    },
  ];
}
