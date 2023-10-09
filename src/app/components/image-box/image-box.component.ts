import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Image } from 'src/app/models/Image';

@Component({
  selector: 'ImageBox',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.less']
})

export class ImageBoxComponent {
  @Input({ required: true }) image?: Image;
  @ViewChild('LazyImage') imageElement?: ElementRef<HTMLImageElement>;
  @ViewChild('UnrenderOnScroll') boxElement?: ElementRef<HTMLImageElement>;

  public isLoaded: boolean = false;
  public isSeen: boolean = false;

  ngAfterViewInit() {
    this.isSeen = true;
  }

  handleInViewport(isInViewport: boolean) {
    // if image is in viewport and not loaded, load it and fetch image info
    if (isInViewport && !this.isLoaded && this.isSeen) {
      this.imageElement?.nativeElement.setAttribute('src', this.image?.photo as string);
      this.isLoaded = true;
    }
  }


}
