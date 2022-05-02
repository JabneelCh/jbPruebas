import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaSubfamiliaComponent } from './nueva-subfamilia.component';

describe('NuevaSubfamiliaComponent', () => {
  let component: NuevaSubfamiliaComponent;
  let fixture: ComponentFixture<NuevaSubfamiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaSubfamiliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaSubfamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
