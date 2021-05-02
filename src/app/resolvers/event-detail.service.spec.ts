import { TestBed } from '@angular/core/testing';
import { EventDetailResolve } from './event-detail.service';

describe('EventDetailResolve', () => {
  let service: EventDetailResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventDetailResolve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
