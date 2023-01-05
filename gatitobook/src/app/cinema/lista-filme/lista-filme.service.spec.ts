import { TestBed } from '@angular/core/testing';

import { ListaFilmeService } from './lista-filme.service';

describe('ListaFilmeService', () => {
  let service: ListaFilmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaFilmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
