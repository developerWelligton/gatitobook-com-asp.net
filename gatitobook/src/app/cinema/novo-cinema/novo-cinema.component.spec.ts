import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoCinemaComponent } from './novo-cinema.component';

describe('NovoCinemaComponent', () => {
  let component: NovoCinemaComponent;
  let fixture: ComponentFixture<NovoCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoCinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
