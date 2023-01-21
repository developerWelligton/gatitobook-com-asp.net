import { TestBed } from '@angular/core/testing';

import { NovoGerenteService } from './novo-gerente.service';

describe('NovoGerenteService', () => {
  let service: NovoGerenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoGerenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
