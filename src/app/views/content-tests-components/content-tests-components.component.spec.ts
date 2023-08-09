import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTestsComponentsComponent } from './content-tests-components.component';

describe('ContentTestsComponentsComponent', () => {
  let component: ContentTestsComponentsComponent;
  let fixture: ComponentFixture<ContentTestsComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentTestsComponentsComponent]
    });
    fixture = TestBed.createComponent(ContentTestsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
