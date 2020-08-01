import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedcardsComponent } from './savedcards.component';

describe('SavedcardsComponent', () => {
  let component: SavedcardsComponent;
  let fixture: ComponentFixture<SavedcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
