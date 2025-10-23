import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card-icon',
  imports: [NgClass],
  templateUrl: './card-icon.html',
})
export class CardIcon {
  card: CardInterface[] = [
    {
      icon: 'fa-solid fa-sack-dollar',
      tittle: 'Cost-Effective Hiring',
      description:
        'Colombia’s lower cost of living allows you to hire top-tier professionals — from engineers to designers — at competitive rates, helping your business scale smartly',
    },
    {
      icon: 'fa-solid fa-clock',
      tittle: 'Time Zone Alignment',
      description:
        'Similar working hours to U.S. Eastern and Central time zones make meetings, handoffs, and collaboration feel effortless.',
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      tittle: 'Highly Educated Professionals',
      description:
        'Universities produce globally minded graduates in business, tech, and design — perfectly suited for remote and international work.',
    },
    {
      icon: 'fa-solid fa-laptop-code',
      tittle: 'Digitally Driven',
      description:
        'A fast-growing tech scene and strong digital culture mean professionals are tool-savvy and collaboration-ready.',
    },
    {
      icon: 'fa-solid fa-handshake',
      tittle: 'Reliable & Committed',
      description:
        ' A strong work ethic and long-term mindset foster loyalty and consistent performance that your company can depend on.',
    },
    {
      icon: 'fa-solid fa-users',
      tittle: 'Easy to Work With',
      description:
        'Warm, adaptable, and team-oriented — Colombian professionals bring both skill and a positive spirit that fit perfectly with international cultures.',
    },
  ];
}
