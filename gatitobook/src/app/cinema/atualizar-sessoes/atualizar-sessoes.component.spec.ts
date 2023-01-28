import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarSessoesComponent } from './atualizar-sessoes.component';

describe('AtualizarSessoesComponent', () => {
  let component: AtualizarSessoesComponent;
  let fixture: ComponentFixture<AtualizarSessoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarSessoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarSessoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
