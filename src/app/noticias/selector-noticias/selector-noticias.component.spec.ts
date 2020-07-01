import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorNoticiasComponent } from './selector-noticias.component';

describe('SelectorNoticiasComponent', () => {
  let component: SelectorNoticiasComponent;
  let fixture: ComponentFixture<SelectorNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
