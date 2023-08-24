import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAndLeaseComponent } from './sales-and-lease.component';

describe('SalesAndLeaseComponent', () => {
  let component: SalesAndLeaseComponent;
  let fixture: ComponentFixture<SalesAndLeaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesAndLeaseComponent]
    });
    fixture = TestBed.createComponent(SalesAndLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
