import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivaUsuarioComponent } from './ativa-usuario.component';

describe('AtivaUsuarioComponent', () => {
  let component: AtivaUsuarioComponent;
  let fixture: ComponentFixture<AtivaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtivaUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
