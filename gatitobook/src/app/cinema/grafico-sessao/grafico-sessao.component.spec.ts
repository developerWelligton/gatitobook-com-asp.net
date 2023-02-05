import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoSessaoComponent } from './grafico-sessao.component';

describe('GraficoSessaoComponent', () => {
  let component: GraficoSessaoComponent;
  let fixture: ComponentFixture<GraficoSessaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoSessaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
