import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateButtonComponent } from './generate-button/generate-button.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageBoxComponent } from './image-box/image-box.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateButtonComponent,
    ImageListComponent,
    ImageBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
