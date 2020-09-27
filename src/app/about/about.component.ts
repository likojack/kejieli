import { Component, OnInit } from '@angular/core';
import * as brands from '@fortawesome/free-brands-svg-icons';
import * as solid from '@fortawesome/free-solid-svg-icons';
import * as regular from '@fortawesome/free-regular-svg-icons';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
export class AboutComponent implements OnInit {
  public faGithub = brands.faGithub;
  public faLinkedin = brands.faLinkedin;
  public faGoogle = brands.faGoogle;
  public faEnvelope = solid.faEnvelope;
  public faIdCard = regular.faIdCard;
  public faBriefcase = solid.faBriefcase;
  public faFacebook = brands.faFacebookSquare;
  public faGraduationCap = solid.faGraduationCap;

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }
}
