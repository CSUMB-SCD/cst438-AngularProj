import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalpageComponent } from './finalpage.component';

describe('FinalpageComponent', () => {
  let component: FinalpageComponent;
  let fixture: ComponentFixture<FinalpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
