import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipuserComponent } from './vipuser.component';

describe('VipuserComponent', () => {
  let component: VipuserComponent;
  let fixture: ComponentFixture<VipuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VipuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VipuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
