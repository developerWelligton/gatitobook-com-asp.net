import { TestBed } from '@angular/core/testing';

import { SessaoAdquiridaService } from './sessao-adquirida.service';

describe('SessaoAdquiridaService', () => {
  let service: SessaoAdquiridaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessaoAdquiridaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
