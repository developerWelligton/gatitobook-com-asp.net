import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGerenteComponent } from './lista-gerente.component';

describe('ListaGerenteComponent', () => {
  let component: ListaGerenteComponent;
  let fixture: ComponentFixture<ListaGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGerenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
