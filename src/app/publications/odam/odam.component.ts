import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Constants from 'src/app/Constants';
import { trigger, style, animate, transition } from '@angular/animations';
import * as brands from '@fortawesome/free-brands-svg-icons';
import * as solid from '@fortawesome/free-solid-svg-icons';
import * as regular from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-odam',
  templateUrl: './odam.component.html',
  styleUrls: ['./odam.component.scss'],
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
export class OdamComponent implements OnInit {
  public faGithub = brands.faGithub;
  public faScroll = solid.faScroll;
  public faYoutube = brands.faYoutube;

  public authors = [
    Constants.KEJIE_LI, Constants.DANIEL_DETONE, Constants.STEVEN_CHEN, Constants.MINH_VO,
    Constants.IAN_REID, Constants.HAMID, Constants.CHRIS_SWEENEY, Constants.JULIAN_STRAUB, Constants.RICHARD_NEWCOMBE
  ];
  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  public goToLink(url: string): void {
    if (url) { window.open(url, '_blank'); }
  }

  public toggleVideo(): void {
    this.videoPlayer?.nativeElement?.paused ? this.videoPlayer?.nativeElement?.play() : this.videoPlayer?.nativeElement?.pause();
  }
}
