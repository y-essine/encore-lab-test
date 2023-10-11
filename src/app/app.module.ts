import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';

import { IconsModule } from './utils/icons-module.module';
import { IntersectionObserverDirective } from './utils/intersection-observer.directive';

import { LoadButtonComponent } from './components/load-button/load-button.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageBoxComponent } from './components/image-box/image-box.component';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ImageBoxSkeletonComponent } from './components/image-box-skeleton/image-box-skeleton.component';
import { FavoriteImagesComponent } from './components/favorite-images/favorite-images.component';

@NgModule({
  declarations: [
    AppComponent,
    IntersectionObserverDirective,
    LoadButtonComponent,
    ImageListComponent,
    ImageBoxComponent,
    FavoriteButtonComponent,
    SearchBoxComponent,
    ImageBoxSkeletonComponent,
    FavoriteImagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IconsModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
