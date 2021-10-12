import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipsterComponent } from './tipster/tipster.component';
import { TipsterDetailsComponent } from './tipster-details/tipster-details.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AboutComponent } from './about/about.component';
import { StaticsComponent } from './statics/statics.component';
import { FeaturesComponent } from './features/features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BookmakersComponent } from './bookmakers/bookmakers.component';
import { BlogComponent } from './blog/blog.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CountriesComponent } from './countries/countries.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TipsterComponent,
    TipsterDetailsComponent,
    HeaderComponent,
    BannerComponent,
    HowItWorksComponent,
    AboutComponent,
    StaticsComponent,
    FeaturesComponent,
    TestimonialsComponent,
    BookmakersComponent,
    BlogComponent,
    NewsletterComponent,
    CountriesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
