import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienServicioComponent } from './bien-servicio.component';

describe('BienServicioComponent', () => {
  let component: BienServicioComponent;
  let fixture: ComponentFixture<BienServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
