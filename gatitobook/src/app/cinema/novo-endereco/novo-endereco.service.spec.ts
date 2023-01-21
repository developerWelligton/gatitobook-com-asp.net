import { TestBed } from '@angular/core/testing';

import { NovoEnderecoService } from './novo-endereco.service';

describe('NovoEnderecoService', () => {
  let service: NovoEnderecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoEnderecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
