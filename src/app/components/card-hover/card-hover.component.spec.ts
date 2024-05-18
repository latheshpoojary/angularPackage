import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHoverComponent } from './card-hover.component';

describe('CardHoverComponent', () => {
  let component: CardHoverComponent;
  let fixture: ComponentFixture<CardHoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardHoverComponent]
    });
    fixture = TestBed.createComponent(CardHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
