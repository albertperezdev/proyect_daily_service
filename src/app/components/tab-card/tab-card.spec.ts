import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCard } from './tab-card';

describe('TabCard', () => {
  let component: TabCard;
  let fixture: ComponentFixture<TabCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
