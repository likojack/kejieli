import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ProfessionalActivitiesComponent } from './professional-activities/professional-activities.component';
import { OdamComponent } from './publications/odam/odam.component';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'publications',
    component: PublicationsComponent
  },
  {
    path: 'publications/odam',
    component: OdamComponent
  },
  {
    path: 'professional-activities',
    component: ProfessionalActivitiesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'legacy',
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
