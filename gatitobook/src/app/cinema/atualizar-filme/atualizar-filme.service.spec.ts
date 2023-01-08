import { TestBed } from '@angular/core/testing';

import { AtualizarFilmeService } from './atualizar-filme.service';

describe('AtualizarFilmeService', () => {
  let service: AtualizarFilmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtualizarFilmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
