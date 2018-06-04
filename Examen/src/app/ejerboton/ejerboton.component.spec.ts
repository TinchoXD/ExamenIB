import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerbotonComponent } from './ejerboton.component';

describe('EjerbotonComponent', () => {
  let component: EjerbotonComponent;
  let fixture: ComponentFixture<EjerbotonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjerbotonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerbotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
