import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkExternalComponent } from './link-external.component';

describe('LinkExternalComponent', () => {
  let component: LinkExternalComponent;
  let fixture: ComponentFixture<LinkExternalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkExternalComponent]
    });
    fixture = TestBed.createComponent(LinkExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
