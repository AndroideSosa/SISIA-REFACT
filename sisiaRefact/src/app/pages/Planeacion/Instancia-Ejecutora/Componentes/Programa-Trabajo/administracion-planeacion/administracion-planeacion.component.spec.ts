import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionPlaneacionComponent } from './administracion-planeacion.component';

describe('AdministracionPlaneacionComponent', () => {
  let component: AdministracionPlaneacionComponent;
  let fixture: ComponentFixture<AdministracionPlaneacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionPlaneacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionPlaneacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
