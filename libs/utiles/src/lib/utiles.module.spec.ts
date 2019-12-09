import { async, TestBed } from '@angular/core/testing';
import { UtilesModule } from './utiles.module';

describe('UtilesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UtilesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UtilesModule).toBeDefined();
  });
});
