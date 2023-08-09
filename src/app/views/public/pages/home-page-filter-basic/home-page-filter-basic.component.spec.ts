import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageFilterBasicComponent } from './home-page-filter-basic.component';

describe('HomePageFilterBasicComponent', () => {
  let component: HomePageFilterBasicComponent;
  let fixture: ComponentFixture<HomePageFilterBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageFilterBasicComponent]
    });
    fixture = TestBed.createComponent(HomePageFilterBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
