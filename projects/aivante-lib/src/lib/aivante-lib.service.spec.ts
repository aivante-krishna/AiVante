import { TestBed } from '@angular/core/testing';

import { AivanteLibService } from './aivante-lib.service';

describe('AivanteLibService', () => {
  let service: AivanteLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AivanteLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
