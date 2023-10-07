import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Image } from 'src/app/models/Image';

@Component({
  selector: 'ImageBox',
  templateUrl: './image-box.component.html',
})

export class ImageBoxComponent {
  @Input({ required: true }) image?: Image;
  @ViewChild('LazyImage') imageElement?: ElementRef<HTMLImageElement>;

  public isLoaded: boolean = false;

  handleInViewport(isInViewport: boolean) {
    if (isInViewport && !this.isLoaded) {
      this.isLoaded = true;
      this.imageElement?.nativeElement.setAttribute('src', this.image?.download_url as string);
    }
  }


}
