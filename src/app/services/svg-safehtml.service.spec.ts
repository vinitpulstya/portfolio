import { TestBed } from '@angular/core/testing';

import { SvgSafehtmlService } from './svg-safehtml.service';

describe('SvgSafehtmlService', () => {
  let service: SvgSafehtmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgSafehtmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
