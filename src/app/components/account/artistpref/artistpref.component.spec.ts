import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistprefComponent } from './artistpref.component';

describe('ArtistprefComponent', () => {
  let component: ArtistprefComponent;
  let fixture: ComponentFixture<ArtistprefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistprefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistprefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
