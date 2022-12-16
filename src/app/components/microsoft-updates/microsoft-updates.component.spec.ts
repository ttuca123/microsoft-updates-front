import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftUpdatesComponent } from './microsoft-updates.component';

describe('MicrosoftUpdatesComponent', () => {
  let component: MicrosoftUpdatesComponent;
  let fixture: ComponentFixture<MicrosoftUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrosoftUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosoftUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
