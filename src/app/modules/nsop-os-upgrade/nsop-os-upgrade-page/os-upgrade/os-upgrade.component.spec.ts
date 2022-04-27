import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsUpgradeComponent } from './os-upgrade.component';

describe('OsUpgradeComponent', () => {
  let component: OsUpgradeComponent;
  let fixture: ComponentFixture<OsUpgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsUpgradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
