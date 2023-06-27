import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamandoExportLloredaComponent } from './llamando-export-lloreda.component';

describe('LlamandoExportLloredaComponent', () => {
  let component: LlamandoExportLloredaComponent;
  let fixture: ComponentFixture<LlamandoExportLloredaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LlamandoExportLloredaComponent]
    });
    fixture = TestBed.createComponent(LlamandoExportLloredaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
