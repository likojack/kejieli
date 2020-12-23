import { Component, Input, OnInit } from '@angular/core';

export interface IPublicationCardsConfig {
  imgUrl: string;
  title: string;
  subtitle: string;
  authors: {
    self?: boolean,
    name: string,
    link?: string,
  } [];
  content: string;
  learnMoreLink: string;
  downloadLink: string;
}

@Component({
  selector: 'app-publication-cards',
  templateUrl: './publication-cards.component.html',
  styleUrls: ['./publication-cards.component.scss']
})
export class PublicationCardsComponent implements OnInit {
  @Input() cardConfig: IPublicationCardsConfig;

  constructor() { }

  ngOnInit(): void {
  }
  public goToLink(url: string): void {
    if (url) { window.open(url, '_blank'); }
  }

  public showMoreInfo(event): void {
    const targetId = event?.currentTarget?.id;
    document.getElementById(targetId).classList.toggle('show-more');
  }

}
