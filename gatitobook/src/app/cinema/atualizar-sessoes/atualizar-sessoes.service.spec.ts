import { TestBed } from '@angular/core/testing';

import { AtualizarSessoesService } from './atualizar-sessoes.service';

describe('AtualizarSessoesService', () => {
  let service: AtualizarSessoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtualizarSessoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
