import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationclassComponent } from './navigationclass.component';

describe('NavigationclassComponent', () => {
  let component: NavigationclassComponent;
  let fixture: ComponentFixture<NavigationclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
