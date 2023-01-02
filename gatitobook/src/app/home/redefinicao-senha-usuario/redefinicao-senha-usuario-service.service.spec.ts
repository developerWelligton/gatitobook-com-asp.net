import { TestBed } from '@angular/core/testing';

import { RedefinicaoSenhaUsuarioServiceService } from './redefinicao-senha-usuario-service.service';

describe('RedefinicaoSenhaUsuarioServiceService', () => {
  let service: RedefinicaoSenhaUsuarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedefinicaoSenhaUsuarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
