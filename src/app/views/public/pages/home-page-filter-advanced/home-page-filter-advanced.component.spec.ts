import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageFilterAdvancedComponent } from './home-page-filter-advanced.component';

describe('HomePageFilterAdvancedComponent', () => {
  let component: HomePageFilterAdvancedComponent;
  let fixture: ComponentFixture<HomePageFilterAdvancedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageFilterAdvancedComponent]
    });
    fixture = TestBed.createComponent(HomePageFilterAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
