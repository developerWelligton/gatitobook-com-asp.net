import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarCinemaComponent } from './atualizar-cinema.component';

describe('AtualizarCinemaComponent', () => {
  let component: AtualizarCinemaComponent;
  let fixture: ComponentFixture<AtualizarCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarCinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
