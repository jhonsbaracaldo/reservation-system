import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistMovieComponent } from './userlist-movie.component';

describe('UserlistMovieComponent', () => {
  let component: UserlistMovieComponent;
  let fixture: ComponentFixture<UserlistMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserlistMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
