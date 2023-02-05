import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoAdquiridaComponent } from './sessao-adquirida.component';

describe('SessaoAdquiridaComponent', () => {
  let component: SessaoAdquiridaComponent;
  let fixture: ComponentFixture<SessaoAdquiridaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessaoAdquiridaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessaoAdquiridaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
