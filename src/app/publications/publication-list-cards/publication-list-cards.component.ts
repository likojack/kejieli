import { Component, OnInit } from '@angular/core';
import { PublicationCardsComponent } from '../publication-cards/publication-cards.component';

@Component({
  selector: 'app-publication-list-cards',
  templateUrl: './publication-list-cards.component.html',
  styleUrls: ['./publication-list-cards.component.scss']
})
export class PublicationListCardsComponent extends PublicationCardsComponent implements OnInit {
  constructor() { super(); }

  ngOnInit(): void {
  }

}
