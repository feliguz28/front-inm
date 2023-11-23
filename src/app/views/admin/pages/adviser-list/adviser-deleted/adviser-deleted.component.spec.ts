import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviserDeletedComponent } from './adviser-deleted.component';

describe('AdviserDeletedComponent', () => {
  let component: AdviserDeletedComponent;
  let fixture: ComponentFixture<AdviserDeletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdviserDeletedComponent]
    });
    fixture = TestBed.createComponent(AdviserDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
