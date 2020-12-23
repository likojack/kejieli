import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationCardsComponent } from './publication-cards.component';

describe('PublicationCardsComponent', () => {
  let component: PublicationCardsComponent;
  let fixture: ComponentFixture<PublicationCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
