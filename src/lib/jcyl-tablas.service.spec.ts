import { TestBed } from '@angular/core/testing';

import { JcylTablasService } from './jcyl-tablas.service';

describe('JcylTablasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JcylTablasService = TestBed.get(JcylTablasService);
    expect(service).toBeTruthy();
  });
});
