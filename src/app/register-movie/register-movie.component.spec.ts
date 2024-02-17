import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMovieComponent } from './register-movie.component';

describe('RegisterMovieComponent', () => {
  let component: RegisterMovieComponent;
  let fixture: ComponentFixture<RegisterMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
