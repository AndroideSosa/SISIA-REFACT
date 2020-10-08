import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionProyectoCampanaComponent } from './administracion-proyecto-campana.component';

describe('AdministracionProyectoCampanaComponent', () => {
  let component: AdministracionProyectoCampanaComponent;
  let fixture: ComponentFixture<AdministracionProyectoCampanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionProyectoCampanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionProyectoCampanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
