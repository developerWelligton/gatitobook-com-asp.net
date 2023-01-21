import { TestBed } from '@angular/core/testing';

import { AtualizarGerenteService } from './atualizar-gerente.service';

describe('AtualizarGerenteService', () => {
  let service: AtualizarGerenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtualizarGerenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
