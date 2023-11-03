import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviserEditComponent } from './adviser-edit.component';

describe('AdviserEditComponent', () => {
  let component: AdviserEditComponent;
  let fixture: ComponentFixture<AdviserEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdviserEditComponent]
    });
    fixture = TestBed.createComponent(AdviserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
