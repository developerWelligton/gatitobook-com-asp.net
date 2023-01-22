import { TestBed } from '@angular/core/testing';

import { AtualizarCinemaService } from './atualizar-cinema.service';

describe('AtualizarCinemaService', () => {
  let service: AtualizarCinemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtualizarCinemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
