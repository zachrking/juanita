import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SlidesComponent } from './slides/slides.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component'


@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    NavbarComponent,
    NewsComponent
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
    AppRoutingModule  
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
