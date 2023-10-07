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

      // how to check if the image is loaded?

      // this?.imageElement?.nativeElement.addEventListener('load', () => {
      //   this.isLoaded = true;
      // remove this event listener
      //   this?.imageElement?.nativeElement.removeEventListener('load', () => { });
      // });
    }
  }


}
