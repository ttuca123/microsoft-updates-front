import { TestBed } from '@angular/core/testing';
import { MicrosoftUpdateService } from './microsoft-update.service';



describe('MicrosoftUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicrosoftUpdateService = TestBed.get(MicrosoftUpdateService);
    expect(service).toBeTruthy();
  });
});
