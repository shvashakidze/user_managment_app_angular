import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdleuserComponent } from './idleuser.component';

describe('IdleuserComponent', () => {
  let component: IdleuserComponent;
  let fixture: ComponentFixture<IdleuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdleuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdleuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
