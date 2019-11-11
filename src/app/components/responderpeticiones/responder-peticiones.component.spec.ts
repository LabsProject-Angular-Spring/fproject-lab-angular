import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderPeticionesComponent } from './responder-peticiones.component';

describe('ResponderPeticionesComponent', () => {
  let component: ResponderPeticionesComponent;
  let fixture: ComponentFixture<ResponderPeticionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponderPeticionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponderPeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
