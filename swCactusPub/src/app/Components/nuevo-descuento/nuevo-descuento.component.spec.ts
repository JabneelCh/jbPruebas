import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoDescuentoComponent } from './nuevo-descuento.component';

describe('NuevoDescuentoComponent', () => {
  let component: NuevoDescuentoComponent;
  let fixture: ComponentFixture<NuevoDescuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoDescuentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoDescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
