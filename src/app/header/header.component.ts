import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public currentTab = 'home';

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.currentTab = this.router.url.slice(1);
    }, 100);
  }

  navigateTo(pageName: string): void {
    this.router.navigate([pageName]);
    this.currentTab = pageName;
  }

}
