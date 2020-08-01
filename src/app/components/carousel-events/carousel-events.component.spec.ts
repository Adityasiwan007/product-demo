import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselEventsComponent } from './carousel-events.component';

describe('CarouselEventsComponent', () => {
  let component: CarouselEventsComponent;
  let fixture: ComponentFixture<CarouselEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
