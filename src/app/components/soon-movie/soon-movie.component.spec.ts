import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoonMovieComponent } from './soon-movie.component';

describe('SoonMovieComponent', () => {
  let component: SoonMovieComponent;
  let fixture: ComponentFixture<SoonMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoonMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoonMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
