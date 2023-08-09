import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFilterBasicComponent } from './home-filter-basic.component';

describe('HomeFilterBasicComponent', () => {
  let component: HomeFilterBasicComponent;
  let fixture: ComponentFixture<HomeFilterBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFilterBasicComponent]
    });
    fixture = TestBed.createComponent(HomeFilterBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
