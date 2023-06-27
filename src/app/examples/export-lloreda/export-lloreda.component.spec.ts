import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportLloredaComponent } from './export-lloreda.component';

describe('ExportLloredaComponent', () => {
  let component: ExportLloredaComponent;
  let fixture: ComponentFixture<ExportLloredaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportLloredaComponent]
    });
    fixture = TestBed.createComponent(ExportLloredaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
