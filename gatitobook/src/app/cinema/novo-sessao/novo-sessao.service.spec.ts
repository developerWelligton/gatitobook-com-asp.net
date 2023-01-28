import { TestBed } from '@angular/core/testing';

import { NovoSessaoService } from './novo-sessao.service';

describe('NovoSessaoService', () => {
  let service: NovoSessaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoSessaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
