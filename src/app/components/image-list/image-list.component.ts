import { Component, ViewChild, OnDestroy } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { ImageService } from 'src/app/services/image-service.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'ImageList',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.less']
})

export class ImageListComponent {
  @ViewChild('VirtualScroller') virtualScroller?: CdkVirtualScrollViewport;

  public isLoading = false;
  public isLoaded = false;
  images: Image[] = [];
  public keyword: string = '';

  public calculatedItemSize = 500;

  constructor(private imageService: ImageService) { }

  public onClick() {
    this.isLoading = true;
    this.getImageList();
  }

  getImageList() {
    this.imageService.getImages().subscribe((data: Image[]) => {
      this.images = data;
      this.isLoading = false;
      this.isLoaded = true;
      console.log(this.images);
    });
  }

  onSearch(keyword: string) {
    this.keyword = keyword;
  }

  get filteredImages() {
    // if no keyword, return all images
    if (!!!this.keyword)
      return this.images;

    let kw = this.keyword.toLowerCase();
    // else filter images by keyword
    return this.images.filter((image) => {
      return image.author?.toLowerCase().includes(kw) ||
        image.text?.toLowerCase().includes(kw) ||
        image.id == parseInt(kw);
    }) || [];
  }
}
