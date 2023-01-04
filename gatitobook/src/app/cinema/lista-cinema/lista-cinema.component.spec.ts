import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCinemaComponent } from './lista-cinema.component';

describe('ListaCinemaComponent', () => {
  let component: ListaCinemaComponent;
  let fixture: ComponentFixture<ListaCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
