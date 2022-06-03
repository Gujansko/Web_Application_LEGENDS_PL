import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzyciskComponent } from './przycisk.component';

describe('PrzyciskComponent', () => {
  let component: PrzyciskComponent;
  let fixture: ComponentFixture<PrzyciskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrzyciskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzyciskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
