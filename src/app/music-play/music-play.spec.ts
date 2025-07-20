import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlay } from './music-play';

describe('MusicPlay', () => {
  let component: MusicPlay;
  let fixture: ComponentFixture<MusicPlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicPlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicPlay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
