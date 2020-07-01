import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorHerramientasComponent } from './selector-herramientas.component';

describe('SelectorHerramientasComponent', () => {
  let component: SelectorHerramientasComponent;
  let fixture: ComponentFixture<SelectorHerramientasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorHerramientasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorHerramientasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
