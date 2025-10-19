import { Component } from '@angular/core';

@Component({
  selector: 'app-time-line',
  imports: [],
  templateUrl: './time-line.html',
})
export class TimeLine {
  sections: Sections[] = [
    {
      icon: 'fa-regular fa-message text-2xl text-secundary',
      title: 'English-Tested talent',
      span: 'Every professional we hire meets international business communication standards — ensuring seamless collaboration with your team.',
    },
    {
      icon: 'fa-solid fa-globe text-2xl text-secundary',
      title: 'We grow digital talent',
      span: 'Through continuous training in soft skills, customer support, e-commerce, and digital tools, we help professionals enhance their skills and stay ahead of the curve.',
    },
    {
      icon: 'fa-solid fa-graduation-cap text-2xl text-secundary',
      title: 'Daily services academy',
      span: 'Our in-house virtual academy provides curated learning paths to help every employee learn, grow, and thrive in their careers.',
    },
    {
      icon: 'fa-solid fa-face-smile text-2xl text-secundary',
      title: 'Happy people, great results',
      span: 'We believe happy employees do their best work. That’s why we offer competitive pay, free training, and clear career growth — creating long-term, committed relationships.',
    },
  ];
}
