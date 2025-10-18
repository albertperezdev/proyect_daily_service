import { Component } from '@angular/core';
import { TabCard } from '../tab-card/tab-card';

@Component({
  selector: 'app-tabs',
  imports: [TabCard],
  templateUrl: './tabs.html',
})
export class Tabs {
  tabs: TabsItems[] = [
    {
      img: 'assets/imgs/tabs/vitaly-gariev-9TF9pMrCFMo-unsplash.jpg',
      title: 'Recruitment & Onboarding',
      description:
        'We manage hiring and onboarding so your team is ready to perform from day one.',
      keyWord: 'Welcome',
      checked: 'true',
    },
    {
      img: 'assets/imgs/tabs/pexels-hillaryfox-1595385.jpg',
      title: 'Salary & Benefits',
      description:
        'We handle payroll, taxes, and benefits—ensuring security and consistency for your remote staff.',
      keyWord: 'Trust',
    },
    {
      img: 'assets/imgs/tabs/dell-g2E2NQ5SWSU-unsplash.jpg',
      title: 'Equipment & Management',
      description:
        'We provide the tools, tech, and management support your team needs to work efficiently.',
      keyWord: 'Efficiency',
    },
    {
      img: 'assets/imgs/tabs/stone-john-CBH6lmQXhu8-unsplash.jpg',
      title: 'Local Support & EOR Services',
      description:
        'Our EOR model ensures full compliance and local support while keeping your team globally connected.',
      keyWord: 'Connection',
    },
    {
      img: 'assets/imgs/tabs/vitaly-gariev-l0E0Y1TdzxE-unsplash.jpg',
      title: 'Welfare & Career Growth',
      description:
        'We foster growth, well-being, and continuous learning so your team stays motivated long-term.',
      keyWord: 'Growth',
    },
  ];
}
