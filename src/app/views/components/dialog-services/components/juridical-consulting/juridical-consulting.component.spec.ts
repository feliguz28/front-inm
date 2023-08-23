import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuridicalConsultingComponent } from './juridical-consulting.component';

describe('JuridicalConsultingComponent', () => {
  let component: JuridicalConsultingComponent;
  let fixture: ComponentFixture<JuridicalConsultingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuridicalConsultingComponent]
    });
    fixture = TestBed.createComponent(JuridicalConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
