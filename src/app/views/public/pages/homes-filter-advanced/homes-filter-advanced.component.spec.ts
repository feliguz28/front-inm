import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesFilterAdvancedComponent } from './homes-filter-advanced.component';

describe('HomesFilterAdvancedComponent', () => {
  let component: HomesFilterAdvancedComponent;
  let fixture: ComponentFixture<HomesFilterAdvancedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomesFilterAdvancedComponent]
    });
    fixture = TestBed.createComponent(HomesFilterAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
