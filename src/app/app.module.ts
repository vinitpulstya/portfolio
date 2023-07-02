import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HeaderComponent } from './components/widgets/header/header.component';
import { SideContactComponent } from './components/widgets/side-contact/side-contact.component';
import { BioComponent } from './components/widgets/bio/bio.component';
import { AboutComponent } from './components/widgets/about/about.component';
import { JobsComponent } from './components/widgets/jobs/jobs.component';
import { ProjectsComponent } from './components/widgets/projects/projects.component';
import { ContactComponent } from './components/widgets/contact/contact.component';
import { FooterComponent } from './components/widgets/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    SideContactComponent,
    BioComponent,
    AboutComponent,
    JobsComponent,
    ProjectsComponent,
    ContactComponent,
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
