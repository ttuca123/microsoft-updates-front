import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftUpdatesFilterComponent } from './microsoft-updates-filter.component';

describe('MicrosoftUpdatesFilterComponent', () => {
  let component: MicrosoftUpdatesFilterComponent;
  let fixture: ComponentFixture<MicrosoftUpdatesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrosoftUpdatesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosoftUpdatesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
