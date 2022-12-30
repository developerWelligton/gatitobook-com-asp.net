import { TestBed } from '@angular/core/testing';

import { AtivaUsuarioService } from './ativa-usuario.service';

describe('AtivaUsuarioService', () => {
  let service: AtivaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtivaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
