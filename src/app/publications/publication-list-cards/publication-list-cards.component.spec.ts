import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationListCardsComponent } from './publication-list-cards.component';

describe('PublicationListCardsComponent', () => {
  let component: PublicationListCardsComponent;
  let fixture: ComponentFixture<PublicationListCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationListCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
