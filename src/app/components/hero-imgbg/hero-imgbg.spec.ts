import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImgbg } from './hero-imgbg';

describe('HeroImgbg', () => {
  let component: HeroImgbg;
  let fixture: ComponentFixture<HeroImgbg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroImgbg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroImgbg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
