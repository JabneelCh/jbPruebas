import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaFamiliaComponent } from './nueva-familia.component';

describe('NuevaFamiliaComponent', () => {
  let component: NuevaFamiliaComponent;
  let fixture: ComponentFixture<NuevaFamiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaFamiliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
