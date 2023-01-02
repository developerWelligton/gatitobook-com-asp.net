import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedefinicaoSenhaUsuarioComponent } from './redefinicao-senha-usuario.component';

describe('RedefinicaoSenhaUsuarioComponent', () => {
  let component: RedefinicaoSenhaUsuarioComponent;
  let fixture: ComponentFixture<RedefinicaoSenhaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedefinicaoSenhaUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedefinicaoSenhaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
