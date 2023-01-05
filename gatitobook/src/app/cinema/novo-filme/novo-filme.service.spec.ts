import { TestBed } from '@angular/core/testing';

import { NovoFilmeService } from './novo-filme.service';

describe('NovoFilmeService', () => {
  let service: NovoFilmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoFilmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
