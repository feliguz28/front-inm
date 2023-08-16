import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesServicesComponent } from './homes-services.component';

describe('HomesServicesComponent', () => {
  let component: HomesServicesComponent;
  let fixture: ComponentFixture<HomesServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomesServicesComponent]
    });
    fixture = TestBed.createComponent(HomesServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
