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
        'We manage the entire recruitment process — from candidate sourcing and skills assessment to interviews and onboarding. Our goal is to ensure every hire fits your company culture and is fully prepared to contribute from day one, saving you time and guaranteeing a smooth start for your new team members.',
      keyWord: 'Welcome',
      checked: 'true',
    },
    {
      img: 'assets/imgs/tabs/pexels-hillaryfox-1595385.jpg',
      title: 'Salary & Benefits',
      description:
        'We handle payroll, taxes, and employee benefits with precision and transparency. Our process ensures every payment is accurate, on time, and fully compliant with local regulations. By taking care of financial operations, we give your business and your team the peace of mind they deserve.',
      keyWord: 'Trust',
    },
    {
      img: 'assets/imgs/tabs/dell-g2E2NQ5SWSU-unsplash.jpg',
      title: 'Equipment & Management',
      description:
        'We provide modern hardware, software, and productivity tools so your remote professionals can deliver their best work from anywhere. Our management system oversees maintenance, performance, and updates, ensuring that every team member has the resources and support they need to work efficiently.',
      keyWord: 'Efficiency',
    },
    {
      img: 'assets/imgs/tabs/stone-john-CBH6lmQXhu8-unsplash.jpg',
      title: 'Local Support & EOR Services',
      description:
        'Through our Employer of Record (EOR) model, we handle all legal, tax, and HR responsibilities for your team in Latin America. You gain full operational flexibility while we take care of compliance, documentation, and local support — keeping your international operations safe, scalable, and worry-free.',
      keyWord: 'Connection',
    },
    {
      img: 'assets/imgs/tabs/vitaly-gariev-l0E0Y1TdzxE-unsplash.jpg',
      title: 'Welfare & Career Growth',
      description:
        'We believe that long-term success comes from investing in people. That’s why we provide career development programs, mental health resources, and ongoing training opportunities. Our welfare initiatives help employees grow personally and professionally, creating a motivated and loyal workforce for your company.',
      keyWord: 'Growth',
    },
  ];
}
