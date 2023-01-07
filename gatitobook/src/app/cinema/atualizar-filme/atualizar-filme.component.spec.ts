import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarFilmeComponent } from './atualizar-filme.component';

describe('AtualizarFilmeComponent', () => {
  let component: AtualizarFilmeComponent;
  let fixture: ComponentFixture<AtualizarFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarFilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
