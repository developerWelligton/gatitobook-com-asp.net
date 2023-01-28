import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoSessaoComponent } from './novo-sessao.component';

describe('NovoSessaoComponent', () => {
  let component: NovoSessaoComponent;
  let fixture: ComponentFixture<NovoSessaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoSessaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
