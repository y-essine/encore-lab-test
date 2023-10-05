import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GenerateButtonComponent } from './components/generate-button/generate-button.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageBoxComponent } from './components/image-box/image-box.component';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateButtonComponent,
    ImageListComponent,
    ImageBoxComponent,
    FavoriteButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
