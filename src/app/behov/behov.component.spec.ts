import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehovComponent } from './behov.component';

describe('BehovComponent', () => {
  let component: BehovComponent;
  let fixture: ComponentFixture<BehovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
