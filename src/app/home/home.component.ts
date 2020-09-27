import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slide', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-30%)' }),
        animate(1200)
      ]),
      transition('* => void', [
        animate(1200, style({ opacity: 1, transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

}
