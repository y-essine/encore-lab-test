import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { ImageService } from 'src/app/services/image-service.service';

@Component({
  selector: 'ImageBox',
  templateUrl: './image-box.component.html',
})

export class ImageBoxComponent {
  @Input({ required: true }) image?: Image;
  @ViewChild('LazyImage') imageElement?: ElementRef<HTMLImageElement>;

  constructor(private imageService: ImageService) { }

  public isLoaded: boolean = false;
  public isSeen: boolean = false;

  public author: string | null = null;

  ngAfterViewInit() {
    this.isSeen = true;
  }

  handleInViewport(isInViewport: boolean) {
    // if image is in viewport and not loaded, load it and fetch image info
    if (isInViewport && !this.isLoaded && this.isSeen) {

      this.imageElement?.nativeElement.setAttribute('src', this.image?.photo as string);

      this.imageService.getImageInfo(this.image?.id as number).subscribe((info) => {
        this.author = info.author;
      });

      this.isLoaded = true;
    }
  }


}
