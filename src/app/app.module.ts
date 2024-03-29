import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SeriesComponent } from './components/series/series.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component'

import {PaginatorModule} from 'primeng/paginator';
import {TabViewModule} from 'primeng/tabview';

import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';
import { SeriesItemComponent } from './components/series-item/series-item.component';
import { VideoEmbededComponent } from './components/video-embeded/video-embeded.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    SliderComponent,
    ItemsBannerComponent,
    MovieItemComponent,
    MovieDetailsComponent,
    SeriesDetailsComponent,
    SeriesItemComponent,
    VideoEmbededComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
