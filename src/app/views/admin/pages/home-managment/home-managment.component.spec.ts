import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeManagmentComponent } from './home-managment.component';

describe('HomeManagmentComponent', () => {
  let component: HomeManagmentComponent;
  let fixture: ComponentFixture<HomeManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeManagmentComponent]
    });
    fixture = TestBed.createComponent(HomeManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
