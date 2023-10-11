import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'ImageBox',
  templateUrl: './image-box.component.html',
})

export class ImageBoxComponent {
  @Input({ required: true }) image?: Image;
  @ViewChild('LazyImage') imageElement?: ElementRef<HTMLImageElement>;
  @ViewChild('UnrenderOnScroll') boxElement?: ElementRef<HTMLImageElement>;

  constructor(private localStorageService: LocalStorageService) { }

  public isLoaded: boolean = false;
  public isSeen: boolean = false;
  public isFavorite: boolean = false;

  ngAfterViewInit() {
    this.isSeen = true;
  }

  checkIfFavorite(): void {
    const favorites = this.localStorageService.getFavorites();
    this.isFavorite = favorites.includes(this.image?.id as number);
  }

  handleInViewport(isInViewport: boolean) {
    if (isInViewport) {
      this.checkIfFavorite();
    }
  }


}
