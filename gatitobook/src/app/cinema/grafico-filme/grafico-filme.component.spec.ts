import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoFilmeComponent } from './grafico-filme.component';

describe('GraficoFilmeComponent', () => {
  let component: GraficoFilmeComponent;
  let fixture: ComponentFixture<GraficoFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoFilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
