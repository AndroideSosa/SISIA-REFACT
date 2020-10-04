import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioVehicularComponent } from './inventario-vehicular.component';

describe('InventarioVehicularComponent', () => {
  let component: InventarioVehicularComponent;
  let fixture: ComponentFixture<InventarioVehicularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioVehicularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioVehicularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
