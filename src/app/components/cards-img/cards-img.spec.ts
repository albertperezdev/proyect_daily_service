import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsImg } from './cards-img';

describe('CardsImg', () => {
  let component: CardsImg;
  let fixture: ComponentFixture<CardsImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsImg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsImg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
