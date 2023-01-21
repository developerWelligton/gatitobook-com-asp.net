import { TestBed } from '@angular/core/testing';

import { ListaGerenteService } from './lista-gerente.service';

describe('ListaGerenteService', () => {
  let service: ListaGerenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaGerenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
