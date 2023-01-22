import { TestBed } from '@angular/core/testing';

import { NovoCinemaService } from './novo-cinema.service';

describe('NovoCinemaService', () => {
  let service: NovoCinemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoCinemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
