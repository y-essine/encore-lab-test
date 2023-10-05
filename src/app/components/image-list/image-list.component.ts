import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { ImageService } from 'src/app/services/image-service.service';

@Component({
  selector: 'ImageList',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.less']
})

export class ImageListComponent {
  public isLoading = false;
  public isLoaded = false;
  images: Image[] = [];

  public onClick() {
    this.isLoading = true;
    this.getImageList();
  }

  constructor(private imageService: ImageService) { }

  getImageList() {
    this.imageService.getImages().subscribe((data: Image[]) => {
      this.images = data;
      this.isLoading = false;
      this.isLoaded = true;
      console.log(this.images);
    });
  }
}
