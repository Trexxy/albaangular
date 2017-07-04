import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InkopComponent } from './inkop.component';

describe('InkopComponent', () => {
  let component: InkopComponent;
  let fixture: ComponentFixture<InkopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InkopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InkopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
