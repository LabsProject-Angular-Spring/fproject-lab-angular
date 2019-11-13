import { TestBed } from '@angular/core/testing';

import { SolicitarService } from './solicitar.service';

describe('SolicitarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolicitarService = TestBed.get(SolicitarService);
    expect(service).toBeTruthy();
  });
});
