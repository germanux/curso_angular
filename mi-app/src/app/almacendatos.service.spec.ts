import { TestBed } from '@angular/core/testing';

import { AlmacendatosService } from './almacendatos.service';

describe('AlmacendatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlmacendatosService = TestBed.get(AlmacendatosService);
    expect(service).toBeTruthy();
  });
});
