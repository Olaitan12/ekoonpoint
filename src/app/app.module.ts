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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
