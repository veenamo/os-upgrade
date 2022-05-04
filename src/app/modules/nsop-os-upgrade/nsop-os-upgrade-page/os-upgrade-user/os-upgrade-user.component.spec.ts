import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsUpgradeUserComponent } from './os-upgrade-user.component';

describe('OsUpgradeUserComponent', () => {
  let component: OsUpgradeUserComponent;
  let fixture: ComponentFixture<OsUpgradeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsUpgradeUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsUpgradeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
