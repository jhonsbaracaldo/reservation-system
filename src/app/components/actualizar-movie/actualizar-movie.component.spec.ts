import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMovieComponent } from './actualizar-movie.component';

describe('ActualizarMovieComponent', () => {
  let component: ActualizarMovieComponent;
  let fixture: ComponentFixture<ActualizarMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
