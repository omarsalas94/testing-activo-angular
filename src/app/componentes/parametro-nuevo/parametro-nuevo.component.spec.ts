import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametroNuevoComponent } from './parametro-nuevo.component';

describe('ParametroNuevoComponent', () => {
  let component: ParametroNuevoComponent;
  let fixture: ComponentFixture<ParametroNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametroNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
