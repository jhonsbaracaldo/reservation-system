import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroComponent } from './registro.component';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';


describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;
  let usuariosServiceSpy: jasmine.SpyObj<UsuariosService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('UsuariosService', ['registrarUsuarioCine']);
    await TestBed.configureTestingModule({
      declarations: [ RegistroComponent ],
      imports: [ RouterTestingModule ],
      providers: [ { provide: UsuariosService, useValue: spy } ]
    })
    .compileComponents();
    usuariosServiceSpy = TestBed.inject(UsuariosService) as jasmine.SpyObj<UsuariosService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call guardarUsuarioRegistro method', () => {
   
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    usuariosServiceSpy.registrarUsuarioCine.and.returnValue(of({}));
    component.guardarUsuarioRegistro();
    expect(usuariosServiceSpy.registrarUsuarioCine).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['login']);
  });

  it('should call irLogin method', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.irLogin();
    expect(navigateSpy).toHaveBeenCalledWith(['login']);
  });

  it('should call onSubmit method', () => {
    const guardarUsuarioRegistroSpy = spyOn(component, 'guardarUsuarioRegistro');
    component.onSubmit();
    expect(guardarUsuarioRegistroSpy).toHaveBeenCalled();
  });
});

