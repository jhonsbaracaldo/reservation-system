import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMovieComponent } from './lista-movie.component';

describe('ListaMovieComponent', () => {
  let component: ListaMovieComponent;
  let fixture: ComponentFixture<ListaMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
