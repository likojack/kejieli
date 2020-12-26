import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as solid from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-professional-activities',
  templateUrl: './professional-activities.component.html',
  styleUrls: ['./professional-activities.component.scss'],
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
export class ProfessionalActivitiesComponent implements OnInit {

  public faScroll = solid.faScroll;
  public faFileAlt = solid.faFileAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
