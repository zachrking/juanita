import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSidenavModule, MatListModule, MatMenuModule, MatToolbarModule, MatCardModule, MatIconModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SlidesComponent } from './slides/slides.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MusicComponent } from './music/music.component';
import { YoutubePlayerModule } from 'ngx-youtube-player';



@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    NavbarComponent,
    MusicComponent,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    AppRoutingModule,
    YoutubePlayerModule,
    MatCardModule,
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
