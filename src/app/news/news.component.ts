import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as solid from '@fortawesome/free-solid-svg-icons';
import * as brands from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
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
export class NewsComponent implements OnInit {

  public faScroll = solid.faScroll;
  public faBriefcase = solid.faBriefcase;
  public faFacebook = brands.faFacebookSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
