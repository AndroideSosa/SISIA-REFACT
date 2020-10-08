import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProyectoCampanaComponent } from './registro-proyecto-campana.component';

describe('RegistroProyectoCampanaComponent', () => {
  let component: RegistroProyectoCampanaComponent;
  let fixture: ComponentFixture<RegistroProyectoCampanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroProyectoCampanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroProyectoCampanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
