import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeddelandenComponent } from './meddelanden.component';

describe('MeddelandenComponent', () => {
  let component: MeddelandenComponent;
  let fixture: ComponentFixture<MeddelandenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeddelandenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeddelandenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
