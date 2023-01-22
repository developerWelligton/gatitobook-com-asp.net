import { TestBed } from '@angular/core/testing';

import { ListaCinemaService } from './lista-cinema.service';

describe('ListaCinemaService', () => {
  let service: ListaCinemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCinemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
