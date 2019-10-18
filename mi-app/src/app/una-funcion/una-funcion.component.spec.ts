import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnaFuncionComponent } from './una-funcion.component';

describe('UnaFuncionComponent', () => {
  let component: UnaFuncionComponent;
  let fixture: ComponentFixture<UnaFuncionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnaFuncionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnaFuncionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
