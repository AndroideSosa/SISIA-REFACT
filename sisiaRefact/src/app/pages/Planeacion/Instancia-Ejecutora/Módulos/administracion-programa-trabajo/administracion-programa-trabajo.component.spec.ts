import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionProgramaTrabajoComponent } from './administracion-programa-trabajo.component';

describe('AdministracionProgramaTrabajoComponent', () => {
  let component: AdministracionProgramaTrabajoComponent;
  let fixture: ComponentFixture<AdministracionProgramaTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionProgramaTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionProgramaTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
