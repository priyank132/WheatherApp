import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatherInfoByZipcodeComponent } from './wheather-info-by-zipcode.component';

describe('WheatherInfoByZipcodeComponent', () => {
  let component: WheatherInfoByZipcodeComponent;
  let fixture: ComponentFixture<WheatherInfoByZipcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheatherInfoByZipcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheatherInfoByZipcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
