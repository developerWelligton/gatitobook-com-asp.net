import { TestBed } from '@angular/core/testing';

import { ListaSessaoService } from './lista-sessao.service';

describe('ListaSessaoService', () => {
  let service: ListaSessaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaSessaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
