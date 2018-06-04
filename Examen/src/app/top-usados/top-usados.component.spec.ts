import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUsadosComponent } from './top-usados.component';

describe('TopUsadosComponent', () => {
  let component: TopUsadosComponent;
  let fixture: ComponentFixture<TopUsadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopUsadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUsadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
