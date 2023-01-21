import { TestBed } from '@angular/core/testing';

import { AtualizarEnderecoService } from './atualizar-endereco.service';

describe('AtualizarEnderecoService', () => {
  let service: AtualizarEnderecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtualizarEnderecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
