import { TestBed } from '@angular/core/testing';

import { ListauxService } from './listaux.service';

describe('ListauxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListauxService = TestBed.get(ListauxService);
    expect(service).toBeTruthy();
  });
});
