import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadButtonComponent } from './load-button.component';

describe('LoadButtonComponent', () => {
  let component: LoadButtonComponent;
  let fixture: ComponentFixture<LoadButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadButtonComponent]
    });
    fixture = TestBed.createComponent(LoadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
