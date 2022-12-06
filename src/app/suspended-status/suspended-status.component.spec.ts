import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendedStatusComponent } from './suspended-status.component';

describe('SuspendedStatusComponent', () => {
  let component: SuspendedStatusComponent;
  let fixture: ComponentFixture<SuspendedStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspendedStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuspendedStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
