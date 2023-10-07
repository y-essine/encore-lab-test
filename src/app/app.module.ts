import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IconsModule } from './utils/icons-module.module';
import { IntersectionObserverDirective } from './utils/intersection-observer.directive';
import { TransposePipe } from './utils/transpose.pipe';

import { AppComponent } from './app.component';

import { GenerateButtonComponent } from './components/generate-button/generate-button.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageBoxComponent } from './components/image-box/image-box.component';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ImageBoxSkeletonComponent } from './components/image-box-skeleton/image-box-skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    IntersectionObserverDirective,
    TransposePipe,
    GenerateButtonComponent,
    ImageListComponent,
    ImageBoxComponent,
    FavoriteButtonComponent,
    SearchBoxComponent,
    ImageBoxSkeletonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
