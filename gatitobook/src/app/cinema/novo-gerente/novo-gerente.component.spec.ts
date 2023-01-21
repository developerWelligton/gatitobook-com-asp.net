import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoGerenteComponent } from './novo-gerente.component';

describe('NovoGerenteComponent', () => {
  let component: NovoGerenteComponent;
  let fixture: ComponentFixture<NovoGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoGerenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
