import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { ImageService } from 'src/app/services/image-service.service';

@Component({
  selector: 'ImageList',
  templateUrl: './image-list.component.html',
})

export class ImageListComponent {
  public isLoading = false;
  public isLoaded = false;
  images: Image[] = [];
  public keyword: string = '';

  public onClick() {
    this.isLoading = true;
    this.getImageList();
  }

  constructor(private imageService: ImageService) { }

  getImageList() {
    this.imageService.getGeneratedImages().subscribe((data: Image[]) => {
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

    // else filter images by keyword
    return this.images.filter((image) => {
      return image.author?.toLowerCase().includes(this.keyword.toLowerCase());
    });
  }
}
