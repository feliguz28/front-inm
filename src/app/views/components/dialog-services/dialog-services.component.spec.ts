import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogServicesComponent } from './dialog-services.component';

describe('DialogServicesComponent', () => {
  let component: DialogServicesComponent;
  let fixture: ComponentFixture<DialogServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogServicesComponent]
    });
    fixture = TestBed.createComponent(DialogServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
