import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftUpdatesListComponent } from './microsoft-updates-list.component';

describe('MicrosoftUpdatesListComponent', () => {
  let component: MicrosoftUpdatesListComponent;
  let fixture: ComponentFixture<MicrosoftUpdatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrosoftUpdatesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosoftUpdatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
