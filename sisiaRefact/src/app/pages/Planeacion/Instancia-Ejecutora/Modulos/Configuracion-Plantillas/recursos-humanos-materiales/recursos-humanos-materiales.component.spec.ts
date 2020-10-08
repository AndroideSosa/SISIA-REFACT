import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosHumanosMaterialesComponent } from './recursos-humanos-materiales.component';

describe('RecursosHumanosMaterialesComponent', () => {
  let component: RecursosHumanosMaterialesComponent;
  let fixture: ComponentFixture<RecursosHumanosMaterialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursosHumanosMaterialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosHumanosMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
