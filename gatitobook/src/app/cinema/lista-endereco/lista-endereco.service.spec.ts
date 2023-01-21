import { TestBed } from '@angular/core/testing';

import { ListaEnderecoService } from './lista-endereco.service';

describe('ListaEnderecoService', () => {
  let service: ListaEnderecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaEnderecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
