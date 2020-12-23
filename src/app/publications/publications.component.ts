import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  animations: [
    trigger('slide', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-15%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 1, transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class PublicationsComponent implements OnInit {
  public showMore = false;

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

  public showMoreInfo(event): void {
    const targetId = event?.currentTarget?.id;
    document.getElementById(targetId).classList.toggle('show-more');
  }
}
