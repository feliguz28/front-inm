import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHomeComponent } from './edit-home.component';

describe('EditHomeComponent', () => {
  let component: EditHomeComponent;
  let fixture: ComponentFixture<EditHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHomeComponent]
    });
    fixture = TestBed.createComponent(EditHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
