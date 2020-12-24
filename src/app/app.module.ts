import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProfessionalActivitiesComponent } from './professional-activities/professional-activities.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicationCardsComponent } from './publications/publication-cards/publication-cards.component';
import { PublicationListCardsComponent } from './publications/publication-list-cards/publication-list-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    NewsComponent,
    PublicationsComponent,
    ProfessionalActivitiesComponent,
    ContactComponent,
    PublicationCardsComponent,
    PublicationListCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
